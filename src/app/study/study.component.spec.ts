import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { StudyComponent } from './study.component';

const serviceMockReturn = [
  {
    question:"Q1",
    answers: [
      "Q1A1",
      "Q1A2", 
      "Q1A3", 
      "Q1A4"
    ],
    correct: 0
  },
  {
    question:"Q2",
    answers: [
      "Q2A1",
      "Q2A2", 
      "Q2A3", 
      "Q2A4"
    ],
    correct: 0
  }
  ];
let servicesArray;
describe('StudyComponent', () => {
  let component: StudyComponent;
  let fixture: ComponentFixture<StudyComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyComponent);
    component = fixture.componentInstance;
    servicesArray = [
      component.ogDataService,
      component.dataService,
      component.cyberMgmtService,
      component.awsSecurityService,
      component.ccspService
    ]
    for(let i = 0; i< servicesArray.length; i++) {
      spyOn(servicesArray[i], 'getQuestions').and.returnValue(serviceMockReturn);
    }

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get local storage item', () => {
    component.getProgressFromLocalStorage();
    expect(localStorage.getItem('progress')).toEqual('[]');
  });

  it('should have a method that records your progress', () => {
    component.recordProgress();
    expect(JSON.parse(localStorage.getItem('progress')).length).toEqual(1);
  });

  it('should get data and call setQuestions', (done) => {
    spyOn(component,'setQuestion');
    const observable = new Observable((observer) => {          
      for(let i = 0; i < servicesArray.length; i++) {
        component.setQuestions(i);
      }      
      observer.next();
      observer.complete();
    });
    observable.subscribe(() => {
      for(let i = 0; i < servicesArray.length; i++) {
        expect(servicesArray[i].getQuestions).toHaveBeenCalledTimes(1);
      }
      expect(component.setQuestion).toHaveBeenCalledTimes(servicesArray.length);
      done();
    });
  });
  describe('component after data setup', () => {

    beforeEach(()=> {
      component.setQuestions(0);
      fixture.detectChanges();
    });

    it('should setup the first question automatically', () => {      
      expect(component.answers).toEqual(serviceMockReturn[0].answers);
      expect(component.question).toEqual(serviceMockReturn[0]);
      expect(component.correct).toEqual(serviceMockReturn[0].correct);
    });

    it('should record a wrong answer', () => {
      component.answerSelected(1);
      expect(component.wasAnswered).toEqual(true);
      expect(component.wrongQuestions.length).toEqual(1);
      expect(component.wrongCount).toEqual(1);
      expect(component.isCorrect).toEqual(false);
    });

    it('should record a correct answer', () => {
      component.answerSelected(0);
      expect(component.wasAnswered).toEqual(true);
      expect(component.wrongQuestions.length).toEqual(0);
      expect(component.wrongCount).toEqual(0);
      expect(component.isCorrect).toEqual(true);
    });

    it('should not advance to the next question without an answer', () => {
      component.next();
      expect(component.index).toEqual(0);
    });

    it('should advance to the next question if answered', () => {
      component.answerSelected(0);
      component.next();
      spyOn(component, 'calcPercent');
      expect(component.index).toEqual(1);
      expect(component.isCorrect).toEqual(null);
      expect(component.wasAnswered).toEqual(false);
      expect(component.index).toEqual(1);
      expect(component.calcPercent).toHaveBeenCalled;
      expect(component.recordProgress).not.toHaveBeenCalled;
    });

    it('should record progress if all questions have been answered once', () => {
      spyOn(component, 'recordProgress');
      component.answerSelected(0);
      component.next();
      component.answerSelected(0);
      component.next();
      expect(component.recordProgress).toHaveBeenCalled;
    });

    it('should setup the wrong questions to be answered again', () => {
      spyOn(component, 'setQuestions');
      component.answerSelected(0);
      component.next();
      component.answerSelected(1);
      expect(component.wrongQuestions.length).toEqual(1);
      component.next();
      expect(component.questions.length).toEqual(1);
      expect(component.index).toEqual(0);
      expect(component.setQuestions).toHaveBeenCalled;      
    });

    it('should create an alert letting you know that you are out of questions', () => {
      spyOn(window, "alert");
      component.answerSelected(0);
      component.next();
      component.answerSelected(0);
      component.next();
      expect(window.alert).toHaveBeenCalledWith("all out of questions!");            
    });

    it('should show the percentage correct', () => {
      component.answerSelected(0);
      component.next();
      component.answerSelected(1);
      component.next();
      expect(component.percentCorrect).toEqual(50);
    });

    it ('should have rendered the question on the page', () => {
      expect(document.getElementById('question').textContent).toEqual('1. Q1');
    });
  });
  
});

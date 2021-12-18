import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsProblemComponent } from './ts-problem.component';

describe('TsProblemComponent', () => {
  let component: TsProblemComponent;
  let fixture: ComponentFixture<TsProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

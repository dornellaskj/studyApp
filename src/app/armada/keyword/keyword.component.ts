import { Component, OnInit  } from '@angular/core';
import { KeywordService } from '../services/keyword.service';
import { Keyword } from '../models/keyword';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrl: './keyword.component.scss'
})
export class KeywordComponent {
  keywordsList:Keyword[];
  currentKeyword:Keyword = new Keyword();


  constructor(
    public keywordService:KeywordService
  ){}

  ngOnInit(): void {
    this.keywordService.getKeywords().subscribe(keywords => {
      this.keywordsList = keywords;
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.currentKeyword);
    let isNewKeyword = true;
    if (form.valid) {
      this.keywordsList.forEach(keyword => {
        if(keyword.name === this.currentKeyword.name) {
          isNewKeyword = false
        }
      });
      if(isNewKeyword) {
        this.keywordService.createKeyword(this.currentKeyword).subscribe(()=> {
          alert(this.currentKeyword.name + " Added!");
          this.currentKeyword = new Keyword();
          this.keywordService.getKeywords().subscribe(keywords => {
            this.keywordsList = keywords;
          });
        }, (error:Error) => {
          alert(error.message);
        })
      } else {
        alert("A keyword with that name already exists.");
      };
      
    } else {
      alert('Please fill out all required fields.')
    }
  }

  selectKeyword(keyword:Keyword) {
    this.currentKeyword.name = keyword.name;
    this.currentKeyword.description = keyword.description;
  }
}

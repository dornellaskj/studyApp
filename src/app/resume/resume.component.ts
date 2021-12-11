import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  skills = []; 

  constructor(
    private skillService : SkillsService
  ) { }


  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }
}

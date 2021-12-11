import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyComponent } from './study/study.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: 'study',
    component: StudyComponent,
  },
  {
    path: '',
    component: ResumeComponent,
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

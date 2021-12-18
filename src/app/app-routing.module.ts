import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyComponent } from './study/study.component';
import { ResumeComponent } from './resume/resume.component';
import { TsProblemComponent } from './ts-problem/ts-problem.component';

const routes: Routes = [
  {
    path: 'study',
    component: StudyComponent,
  },
  {
    path: 'tsprob',
    component: TsProblemComponent
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

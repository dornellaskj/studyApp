import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyComponent } from './study/study.component';
import { ResumeComponent } from './resume/resume.component';
import { TsProblemComponent } from './ts-problem/ts-problem.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { DndComponent } from './dnd/dnd.component';
import { BattleComponent } from './battle/battle.component';
import { AxesComponent } from './app/axes/axes.component';
import { ArmadaModule } from './armada/armada.module';

const routes: Routes = [
  {
    path: 'study',
    component: StudyComponent,
  },
  {
    path: 'char',
    component: CharsheetComponent,
  },
  {
    path: 'tsprob',
    component: TsProblemComponent
  },
  {
    path: 'dnd',
    component: DndComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'axes',
    component: AxesComponent
  },
  {
    path: '',
    component: ResumeComponent,
  },
  {
    path: 'armada',
    loadChildren: () =>  ArmadaModule,
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

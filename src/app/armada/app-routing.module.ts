import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmadaComponent } from './armada.component';
import { ShipsComponent } from './ships/ships.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ships',
    component: ShipsComponent,
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StudyComponent } from './study/study.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillComponent } from './skill/skill.component';
import { TsProblemComponent } from './ts-problem/ts-problem.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { DndComponent } from './dnd/dnd.component';
import { BattleComponent } from './battle/battle.component';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { AxesComponent } from './app/axes/axes.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    ResumeComponent,
    SkillComponent,
    TsProblemComponent,
    CharsheetComponent,
    DndComponent,
    BattleComponent,
    AxesComponent
  ],
  imports: [
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatRadioModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

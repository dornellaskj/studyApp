import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ArmadaComponent } from './armada.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { ShipsComponent } from './ships/ships.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ArmadaComponent,
    ShipsComponent,
    HomeComponent
  ],
  imports: [
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatRadioModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [ArmadaComponent]
})
export class ArmadaModule { }

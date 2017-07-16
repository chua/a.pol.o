import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { ExpedienteService } from './expediente/expediente.service';
import { PersonaService }    from './expediente/persona.service';

import { ExpedientepickerComponent } from './common/expedientepicker/expedientepicker.component';
import { FormGeneratorComponent } from './common/form-generator/form-generator.component';







@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ExpedientepickerComponent,
    FormGeneratorComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AngularFireDatabaseModule,
    ExpedienteService,
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpedienteListadoComponent } from './expediente-listado.component';
import { ExpedienteDetalleComponent } from './expediente-detalle.component';
import { ExpedienteFormComponent } from './expediente-form.component';

import { PersonaListadoComponent } from './persona-listado.component';


const routes: Routes = [

  { path: '', redirectTo: 'listado' },
  { path: 'listado', component: ExpedienteListadoComponent },
  { path: ':ide',          component: ExpedienteDetalleComponent },
  { path: 'ide:/prs/:idp', component: PersonaListadoComponent },

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
 export class ExpedienteRoutingModule { }

export const routingComponents = [
  ExpedienteListadoComponent,
  ExpedienteDetalleComponent,
  ExpedienteFormComponent,
  PersonaListadoComponent
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';


import { DchosDetDsvComponent } from './diligencias/dchos-det-dsv/dchos-det-dsv.component';
import { DchosAlcoholComponent } from './diligencias/dchos-alcohol/dchos-alcohol.component';

const routes: Routes = [
  { path: '',      data:[''], pathMatch: 'full', redirectTo: 'hello' },
  {
    path: 'hello',
    data:['Inicio'],
    component: HelloComponent
  },
  {
    path: 'expediente',
    data: ['Expedientes'],
    loadChildren: './expediente/expediente.module#ExpedienteModule'
  },
  /*
  { path: 'expediente',
    children: [
      { path: '',    component: ExpedienteComponent },
      { path: ':id', component: ExpedienteDetalleComponent },
    /*   children: [
          { path: '',    component: ExpedienteDetalleComponent },
          { path: ':id', component: ExpedienteFormComponent }
        ]
      },*/
  {
    path: 'dchos_detenido',
    data: ['D.Det'],
    component: DchosDetDsvComponent
  },
  {
    path: 'dchos_alcohol', 
    data: ['D.alc'],
    component: DchosAlcoholComponent
  },
 //{ path: 'expediente', component: ExpedienteComponent },



 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
 export class AppRoutingModule { }

export const routingComponents = [
  HelloComponent,
  DchosDetDsvComponent,
  
  DchosAlcoholComponent
];

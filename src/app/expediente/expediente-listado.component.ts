import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';
import { ExpedienteService } from '../expediente/expediente.service';
import { TExpediente } from './expediente.class';






@Component({
  selector: 'app-expediente-listado',
  templateUrl: './expediente-listado.component.html'
})
export class ExpedienteListadoComponent {

  expedientes: FirebaseListObservable<TExpediente>;
  keyId: string = null;

  constructor(public router: Router,
              public es: ExpedienteService) { this.expedientes = this.es.getExpedients$(); }

  verDetalle(keyId): void {
    this.router.navigate(['/expediente', keyId]);
  }

  borrarExpediente (keyId): void {
    this.expedientes.remove(keyId);
  }

  nuevoExpediente () {
    const newId = this.expedientes.push(new TExpediente());
    this.verDetalle(newId.key);
  }

}

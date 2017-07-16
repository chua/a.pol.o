import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable,
         FirebaseObjectObservable   } from 'angularfire2/database';

import { PersonaService } from './persona.service';
import { TPersona } from './persona.class';






@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html'
})
export class PersonaListadoComponent {

  personas: FirebaseListObservable<any>;
  

  constructor(public router: Router,
              public ps: PersonaService) { 
    this.personas = this.ps.getPersonas(); 
  }

  detalle (keyId): void {
    console.log ("navegando hacia /prs/".concat(keyId));
    this.router.navigate(['/prs', keyId]);
  }

  borrar (keyId): void {this.ps.borrar(keyId);}

  nuevo () {
    const newId = this.ps.nuevo (new TPersona());
    this.detalle(newId);
  }

}

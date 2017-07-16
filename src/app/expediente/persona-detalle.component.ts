import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { TPersona } from './persona.class';
import { PersonaService } from './persona.service';



@Component({
  selector:    'app-persona-detalle',
  templateUrl: './persona-detalle.component.html'
})
export class PersonaDetalleComponent {

  model: FirebaseObjectObservable<TPersona>;
  
  constructor(private route: ActivatedRoute,
              public  ps: PersonaService) {

    this.route.params.subscribe(prms => {
      const keyId = prms['ide'];
      if (!(keyId === null || keyId === undefined || keyId === '')) {
        this.model = this.ps.getPersonaAsObject$(keyId);
      }
    }); //routeparams



  }


}

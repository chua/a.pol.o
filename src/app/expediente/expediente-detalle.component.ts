import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { TExpediente } from './expediente.class';
import { ExpedienteService } from './expediente.service';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-expediente-detalle',
  templateUrl: './expediente-detalle.component.html'
})
export class ExpedienteDetalleComponent {

  model: FirebaseObjectObservable<TExpediente>;
  verForm = true;


  constructor(private route: ActivatedRoute,
              public  es: ExpedienteService) {

    this.route.params.subscribe(prms => {
      const keyId = prms['ide'];
      if (!(keyId === null || keyId === undefined || keyId === '')) {
        this.model = this.es.getExpedientAsObject$(keyId);
      }
    }); //routeparams



  }


}

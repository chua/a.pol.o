import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { TExpediente } from './expediente.class';

  export interface Mapping {
      [key: string]: (value: any) => any;
  }


@Injectable()
export class ExpedienteService {

  rama = '/Expedientes/';
  expedients$: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase) {
    this.expedients$ = db.list(this.rama);
  }

  getExpedients$ (): FirebaseListObservable<any> {
    return (this.expedients$);
  }

  getExpedientAsObject$ (id: string): FirebaseObjectObservable<TExpediente> {
    if (!id) { return null; }
    return (this.db.object(this.rama.concat(id)));
  }

  getExpedientAsList$ (id: string): Observable<any> {
    if (!id) { return null; }
    return (this.db.list(this.rama.concat(id)));
  }

}

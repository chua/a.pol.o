import { Injectable } from '@angular/core';
import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable } from 'angularfire2/database';

import { TPersona } from './persona.class';


@Injectable()
export class PersonaService {

  rama = '/Personas/';
  personas: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase) {
    this.personas = db.list(this.rama);
  }

  getPersonas (): FirebaseListObservable<TPersona> {
    return (this.personas);
  }

  getPersonaAsObject$ (id: string): FirebaseObjectObservable<TPersona> {
    if (!id) { return null; }
    return (this.db.object(this.rama.concat(id)));
  }

  nuevo (data: TPersona): string {
    const newId = this.personas.push(data);
    return(newId.key);
  }

  borrar (keyId) {
    this.personas.remove(keyId);
  }



}

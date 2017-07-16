import { Component, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { ExpedienteService } from '../../expediente/expediente.service';


@Component({
  selector: 'app-expedientepicker',
  templateUrl: './expedientepicker.component.html',
  styleUrls: ['./expedientepicker.component.css']
})
export class ExpedientepickerComponent {
  @Output('selected') selected: EventEmitter <any> = new EventEmitter<any>();

  expedients$: FirebaseListObservable<any>;

  constructor(public es: ExpedienteService) { this.expedients$ = es.getExpedients$(); }

  onSelect (id: string) { this.selected.emit(id); }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-generator.component.html'
})

export class FormGeneratorComponent implements OnInit {
  @Input()  Name:    string = null;
  @Input()  Type:    string = null;
  
  @Input()  In:      ngModel = null;
  @Output() status: EventEmitter <any> = new EventEmitter<any>();
            //    [ngModel]="(model|async)?.numero"
             //   (ngModelChange)="model.update({numero: $event})"

  

  constructor() { }

  ngOnInit() {
  }

}

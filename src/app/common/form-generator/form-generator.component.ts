import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {
  @Input()  Fields:  string[] = null;
  @Input()  Filter:  string[] = null;
  @Input()  Mode = 'all'; //All | Filtered | Combined

  @Output() status: EventEmitter <any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}

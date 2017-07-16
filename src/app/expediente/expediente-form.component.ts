import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { TExpediente } from './expediente.class';
import { ExpedienteService } from './expediente.service';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-expediente-form',
  templateUrl: './expediente-form.component.html',
  styleUrls: ['./expediente-form.component.css']
})
export class ExpedienteFormComponent implements OnInit, AfterViewInit {
  @Input('model') model: FirebaseObjectObservable<TExpediente>;
  @Input('input') input: string[];
  @ViewChild('#expedienteForm') public dataForm: NgForm;

  


  constructor () {
    //hasta encontrar método más elegante....
    
    
  }

  ngOnInit () {
console.log(this.input);
//console.log( );

  }

  ngAfterViewInit () {
    // Ahora puedes utilizar el componente hijo
    
    
  }

}

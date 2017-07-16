import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExpedienteRoutingModule, routingComponents } from './expediente.routing';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ExpedienteRoutingModule
    ],
    declarations: [
        routingComponents
    ]
})

export class ExpedienteModule {}

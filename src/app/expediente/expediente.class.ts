
export class TExpediente {
/*
    campos: campo_base[] = [
        new campo_base ('exp_numero','Numero','text')
    ];

*/
    creado_el: string;
    creado_por: string;
    numero: string;
    fecha: string;
    hora: string;
    instructor: string;
    secretario: string;

    constructor () {
        this.creado_el = new Date().toISOString();
        this.creado_por = 'me';
    }
}

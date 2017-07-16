
export class TPersona {

    creado_el: string;
    creado_por: string;
    nombre: string;
    nacimiento: string;
    
    

    constructor () {
        this.creado_el = new Date().toISOString();
        this.creado_por = 'me';
    }


}

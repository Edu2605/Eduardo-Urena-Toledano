import { Reserva } from "../models/reserva.model";

export class ReservaService{
    
    private reservas: Reserva []=
    [{"Origen_Destino":"Madrid - Roma","Fecha":"05/11/1996 | 18.55 h","Precio":"200.00"}];

    constructor(){
    }

    addReserva(value: Reserva){
        this.reservas.push(value);
    }

    getReserva(){
        return this.reservas;
    }

    updateReserva(value: Reserva){
    }

    removeReserva(value: Reserva){
    }
 
}
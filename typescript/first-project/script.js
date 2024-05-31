"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    gambling() {
        return `Para el sorteo ${this.nombre} el ticket ganador es: ${this.ticket}`;
    }
}
const sorteo = new Sorteo('Loteria');
sorteo.setTicket(1234);
console.log(sorteo.gambling());

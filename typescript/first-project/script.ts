class Sorteo<T> {
  private ticket?: T;

  constructor(private nombre: string) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }
  public gambling() {
    return `Para el sorteo ${this.nombre} el ticket ganador es: ${this.ticket}`;
  }
}

const sorteo = new Sorteo<number>('Loteria');
sorteo.setTicket(1234);
console.log(sorteo.gambling());

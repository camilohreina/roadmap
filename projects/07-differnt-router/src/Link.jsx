import { EVENTS } from './consts'
export function navigate(href) {
    window.history.pushState({}, '', href)
    //Crear un evento personalizado para dar aviso del cambio 
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}
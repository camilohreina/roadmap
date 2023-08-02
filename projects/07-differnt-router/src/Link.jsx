import { BUTTONS, EVENTS } from './consts'
export function navigate(href) {
    window.history.pushState({}, '', href)
    //Crear un evento personalizado para dar aviso del cambio 
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
    const handleClick = (event) => {

        const isMainEvent = event.button === BUTTONS.primary // Esta dando click con el botón principal 
        const isModifiedEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey // Es un evento modificado
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to)
        }

    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}
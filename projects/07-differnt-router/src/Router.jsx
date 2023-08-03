import { useState, useEffect } from "react"
import { EVENTS } from "./consts"

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        //Escucha el evento de ir hacia adelante en la navigacion
        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)

        //Escuchar el evento de dar click al boton de atrás
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    //get page by path
    const Page = routes.find(({ path }) => path === currentPath)?.Component
    return Page ? <Page /> : <DefaultComponent />
}
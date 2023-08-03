import { useState, useEffect } from "react"
import { EVENTS } from "./consts"
import { match } from "path-to-regexp"


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

    let routeParams = {}

    //get page by path
    const Page = routes.find(({ path }) => {
        if (path === currentPath) return true

        //Dynamically routes /search/:query
        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        routeParams = matched.params //{query: 'java'} // /search/java
        return true
    })?.Component
    return Page ?
        <Page routeParams={routeParams} /> :
        <DefaultComponent routeParams={routeParams} />
}
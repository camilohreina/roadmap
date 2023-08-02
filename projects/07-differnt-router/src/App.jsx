import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate(href) {
  window.history.pushState({}, '', href)
  //Crear un evento personalizado para dar aviso del cambio 
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <img
        src='https://pbs.twimg.com/profile_images/1614338394745610243/DnxZH1TD_400x400.jpg'
        alt='Foto de differnt'
      />
      <p>Differnt Esta creando un nuevo react router para uds</p>
      <button onClick={() => navigate('/')}>Ir a home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    //Cuando se debe ejecutar
    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <a href='/about'>Ir a sobre nosotros</a>
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
      <a href='/'>Ir a home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </>
  )
}

export default App

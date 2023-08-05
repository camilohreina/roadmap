import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Page404 from './404'
import SearchPage from './Search'

import { Router } from './Router'
import { Route } from './Route'



const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/about" Component={AboutPage}></Route>
      </Router>
    </>
  )
}

export default App

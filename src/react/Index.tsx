import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'
import Home from './Home'
import About from './pages/About'
import Details from './pages/Details'
import Grossesse from './pages/Grossesse'
import Gyneco from './pages/Gyneco'
import Pnp from './pages/Pnp'
import Pricing from './pages/Pricing'
import Reeducation from './pages/Reeducation'
import Resources from './pages/Resources'
import Urgences from './pages/Urgences'

export function Index () {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).bootstrapMain()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/gynecologie' element={<Gyneco />} />
          <Route path='/grossesse-et-post-partum' element={<Grossesse />} />
          <Route path='/reeducation-perineale' element={<Reeducation />} />
          <Route path='/pnp' element={<Pnp />} />
          <Route path='/urgence' element={<Urgences />} />
          <Route path='/a-propos' element={<About />} />
          <Route path='/infos-pratiques' element={<Details />} />
          <Route path='/tarifs' element={<Pricing />} />
          <Route path='/documents' element={<Resources />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

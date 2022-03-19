import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'
import Home from './Home'
import Grossesse from './pages/Grossesse'
import Gyneco from './pages/Gyneco'
import Reeducation from './pages/Reeducation'

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

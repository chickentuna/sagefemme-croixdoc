import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'
import Home from './Home'
import Grossesse from './pages/Grossesse'
import Gyneco from './pages/Gyneco'

export function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={ <Home /> }/>
          <Route path="/gynecologie" element={ <Gyneco /> }/>
          <Route path="/grossesse-et-post-partum" element={ <Grossesse /> }/>
          <Route
            path="*"
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

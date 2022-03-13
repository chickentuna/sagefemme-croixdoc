import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Header } from './Header'
import Home from './Home'

export function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="home"
            element={
              <Home />
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

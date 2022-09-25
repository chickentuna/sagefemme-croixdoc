import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'
import Home from './Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Details from './pages/Details'
import Grossesse from './pages/Grossesse'
import Gyneco from './pages/Gyneco'
import Legal from './pages/Legal'
import Massages from './pages/Massages'
import PageNotFound from './pages/PageNotFound'
import Pnp from './pages/Pnp'
import Pricing from './pages/Pricing'
import Quand from './pages/Quand'
import Reeducation from './pages/Reeducation'
import Resources from './pages/Resources'
import Urgences from './pages/Urgences'
import UrgencesJour from './pages/UrgencesJour'
import UrgencesNuit from './pages/UrgencesNuit'

// TODO: whatsup with the /images/ url?

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
          <Route path='/urgences' element={<Urgences />} />
          <Route path='/urgences-nuit' element={<UrgencesNuit />} />
          <Route path='/urgences-jour' element={<UrgencesJour />} />
          <Route path='/a-propos' element={<About />} />
          <Route path='/infos-pratiques' element={<Details />} />
          <Route path='/tarifs' element={<Pricing />} />
          <Route path='/documents-utiles' element={<Resources />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/quand-aller-aux-urgences' element={<Quand />} />
          <Route path='/mentions-legales' element={<Legal />} />
          <Route path='/massages' element={<Massages />} />
          {/* <Route path='/sitemap' element={<SiteMap />} /> */}
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

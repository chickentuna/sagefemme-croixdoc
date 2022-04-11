import React from 'react'
import { createUseStyles, ThemeProvider } from 'react-jss'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import TempPopup from './interactive/TempPopup'
import { theme } from './theme'

const useStyle = createUseStyles({
  box: {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh'
  }
})

if (location.pathname.length > 1 && location.pathname.endsWith('/')) {
  location.replace(location.pathname.slice(0, location.pathname.length - 1))
}

// TODO: domain & emails

export default function App () {
  const classes = useStyle()

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.box}>
          <Header />
          <Outlet />
          <Footer />
        </div>

        <TempPopup />

      </ThemeProvider>
    </>
  )
}

import React from 'react'
import { createUseStyles } from 'react-jss'
import { Outlet } from 'react-router-dom'
import Header from './Header'

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

export default function App() {
  const classes = useStyle()
  return (
    <div className={classes.box}>
      <Header />
      <Outlet />
    </div>
  )
}
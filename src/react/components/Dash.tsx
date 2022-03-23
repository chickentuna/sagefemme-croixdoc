import React from 'react'
import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
  dash: {
    display: 'block',
    width: '40px',
    height: '3px',
    background: theme.medicalBlue

  }
}))
// `http://poulton.fun:3000/img?type=waifu&id=${Math.random() * 548 | 0}&folder=3`

function Dash () {
  const { dash } = useStyles()
  return (
    <div className={dash}></div>
  )
}

export default React.memo(Dash)

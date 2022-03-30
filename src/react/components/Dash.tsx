import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

const useStyles = createUseStyles({
  dash: {
    display: 'block',
    width: '40px',
    height: '3px',
    background: theme.medicalBlue
  },
  forTitle: {
    margin: 'auto',
    width: '80%',
    marginTop: 4
  }
})

interface Props {
  title?: boolean
  color?: string
}

function Dash ({ title = false, color = theme.medicalBlue }: Props) {
  const { dash, forTitle } = useStyles()
  return (
    <div className={classNames([dash, { [forTitle]: title }])}></div>
  )
}

export default React.memo(Dash)

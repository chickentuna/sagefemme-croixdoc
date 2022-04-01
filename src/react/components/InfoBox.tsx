import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { Timetable } from '../../components/Timetable'
import ContactInfo from '../components/ContactInfo'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
  hiddenBox: {
    '&$infoBox': {
      boxShadow: 'none'
    }
  },
  infoBox: {
    width: '100%',
    position: 'relative',
    color: '#444444',
    textAlign: 'center',
    boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
    padding: '20px 60px 30px 60px',
    '& h3': {
      color: '#777',
      fontSize: '20px',
      fontWeight: 700,
      margin: '10px 0'
    },
    '& p': {
      fontSize: 14,
      lineHeight: '24px',
      marginBottom: 0,
      padding: 0
    }
  }
}))

interface Props {
  children:ReactNode
  solid?: boolean
  className?: string
}

function InfoBox ({ children, solid = true, className }: Props) {
  const classes = useStyles()
  return (
    <div className={classNames([classes.infoBox, { [classes.hiddenBox]: !solid }, className])}>
      {children}
    </div>
  )
}

export default React.memo(InfoBox)

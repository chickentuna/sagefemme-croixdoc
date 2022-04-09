import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { Theme } from '../../theme'
import './ButtonLink.scss'

const useStyles = createUseStyles((theme: Theme) => ({
  link: {
    display: 'flex',
    flex: '1 0 250px',
    justifyContent: 'center',
    backgroundColor: 'white',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'all 150ms ease-out',
    textDecoration: 'none',

    '&:hover': {
      opacity: 0.8
    },
    '&:focus': { outline: '2px solid transparent', outlineOffset: '2px' }
  },
  block: {
    fontFamily: 'Arial',
    textAlign: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: [30, 20, 30, 20]
  },
  iconWrapper: {
    fontSize: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderWidth: '0px',
    borderRadius: '50%',
    backgroundColor: theme.medicalBlue,
    padding: '22px',
    height: '88px',
    width: '88px',
    color: 'white'
  },
  title: {
    fontSize: '1.25rem',
    lineHeight: 1.2,
    color: theme.medicalBlue,
    fontWeight: 500,
    textTransform: 'uppercase',
    margin: [25, 0, 0, 0]
  },
  text: {
    lineHeight: 1.6,
    textAlign: 'center',
    color: '#808080',
    fontStyle: 'italic',
    margin: [25, 0, 0, 0]
  },
  inline: {
    flex: 'none',
    background: theme.medicalBlue,
    '&:hover': {
      background: theme.medicalBlue,
      opacity: 0.8
    },
    '& $block': {
      flex: 1,
      flexDirection: 'row',
      gap: 20,
      padding: 15,
      justifyContent: 'center',
      '@media (max-width: 1230px)': {
        justifyContent: 'center'
      }
    },
    '& $text': {
      margin: 0
    },
    '& $title': {
      margin: 0,
      color: 'white',
      fontWeight: 'bold'
    },
    '& $iconWrapper': {
      backgroundColor: 'white',
      color: 'red'
    }
  }
}))

interface ButtonLinkProps {
  to: string
  icon: IconDefinition
  inline?: boolean
  title: ReactNode
  children?: ReactNode
}

export default function ButtonLink ({ to, children, icon, title, inline = false }: ButtonLinkProps) {
  const classes = useStyles()
  return (
    <Link to={to} className={classNames([{ [classes.inline]: inline }, classes.link])}>
      <div className={classes.block}>
        <span className={classes.iconWrapper}>
          <FontAwesomeIcon icon={icon} />
        </span>
        <h5 className={classes.title}>{title}</h5>
        {children != null && <p className={classes.text}>{children}</p>}
      </div>
    </Link>
  )
}

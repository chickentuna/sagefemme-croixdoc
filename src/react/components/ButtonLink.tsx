import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import './ButtonLink.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons'

const useStyles = createUseStyles({
  link: {
    flex: '1 0 250px',
    color: '#111111',
    backgroundColor: '#f2f2f2',
    margin: [0, 15],
    cursor: 'pointer',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    transition:  ['all 150ms ease-out', 'all 150ms ease-out'],
    textDecoration: 'none',
    WebkitTransition: 'all 150ms ease-out',
    MozTransition: 'all 150ms ease-out',
    msTransition: 'all 150ms ease-out',
    OTransition: 'all 150ms ease-out',
    '&:hover': {
      backgroundColor: 'lightgrey',
      color: '#7db6d3',
      textDecoration: 'none'
    },
    '&:focus': { outline: '2px solid transparent', outlineOffset: '2px' }
  },
  block: {
    WebkitTextSizeAdjust: '100%',
    fontSize: '1rem',
    lineHeight: 1.6,
    fontFamily: '\'Open Sans\',sans-serif',
    pointerEvents: 'initial',
    textAlign: 'center',
    color: '#111111',
    boxSizing: 'border-box',
    position: 'relative',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '30px',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  iconWrapper: {
    fontSize: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    WebkitTextSizeAdjust: '100%',
    fontFamily: '\'Open Sans\',sans-serif',
    pointerEvents: 'initial',
    boxSizing: 'border-box',
    position: 'relative',
    lineHeight: 0,
    borderWidth: '0px',
    borderRadius: '50%',
    textAlign: 'left',
    backgroundColor: '#4867d6',
    padding: '22px',
    height: '88px',
    width: '88px',
    backgroundImage: 'none',
    color: 'rgb(255, 255, 255) !important',
    margin: '0 auto'
  },
  svg: {
    WebkitTextSizeAdjust: '100%',
    fontSize: '1rem',
    fontFamily: '\'Open Sans\',sans-serif',
    pointerEvents: 'initial',
    lineHeight: 0,
    textAlign: 'left',
    color: 'rgb(255, 255, 255) !important',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    fill: 'currentColor',
    overflow: 'hidden'
  },
  'u-svg-content': {
    WebkitTextSizeAdjust: '100%',
    fontSize: '1rem',
    fontFamily: '\'Open Sans\',sans-serif',
    pointerEvents: 'initial',
    lineHeight: 0,
    textAlign: 'left',
    color: 'rgb(255, 255, 255) !important',
    boxSizing: 'border-box',
    width: '0',
    height: '0',
    overflow: 'hidden'
  },
  title: {
    WebkitTextSizeAdjust: '100%',
    pointerEvents: 'initial',
    textAlign: 'center',
    boxSizing: 'border-box',
    fontFamily: 'Roboto,sans-serif',
    fontSize: '1.25rem',
    lineHeight: 1.2,
    wordWrap: 'break-word',
    position: 'relative',
    color: '#4867d6',
    padding: '0',
    fontWeight: 500,
    textTransform: 'uppercase',
    margin: '25px 0 0'
  },
  text: {
    WebkitTextSizeAdjust: '100%',
    fontSize: '1rem',
    lineHeight: 1.6,
    fontFamily: '\'Open Sans\',sans-serif',
    pointerEvents: 'initial',
    textAlign: 'center',
    boxSizing: 'border-box',
    padding: '0',
    wordWrap: 'break-word',
    position: 'relative',
    color: '#808080',
    fontStyle: 'italic',
    margin: '25px 0 0'
  }
}
)

interface ButtonLinkProps {
  to: string
  children?: ReactNode
  icon: IconDefinition
}

export default function ButtonLink({to, children, icon}: ButtonLinkProps) {
  const classes = useStyles()
  return (
    <Link to={to} className={classes.link}>
      <div className={classes.block}>
        <span className={classes.iconWrapper}>
          <FontAwesomeIcon icon={icon} />
        </span>
        <h5 className={classes.title}>{children}</h5>
        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
      </div>
    </Link>
  )
}
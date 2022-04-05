import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { Theme } from './theme'

const useStyle = createUseStyles((theme: Theme) => ({
  container: {
    flex: '0 1 60px',
    display: 'flex',
    width: '100%',
    backgroundColor: theme.sfBlack,
    justifyContent: 'center',
    '@media (max-width: 560px)': {
      '& $wrapper': {
        flexDirection: 'column',
      }
    },
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    maxWidth: 560,
    justifyContent: 'space-around',
    gap: 60,
    alignItems: 'center',
    padding: 20
  },
  resource: {

  },
  legal: {
    fontSize: 18,
    '& a': {
      color: 'white',
      '&:hover': {
        color: 'white',
        opacity: 0.8
      }
    }
  }
}))

export default function Footer () {
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.resource}>
          <Link className='button-39' to='/documents-utiles'>
            Documents utiles
          </Link>
        </div>
        <div className={classes.legal}>
          <div>
            <Link to='/sitemap'>
              Plan du site
            </Link>
          </div>
          <div>
            <Link to='/mentions-legales'>
              Mentions légales
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

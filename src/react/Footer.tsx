import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { Theme } from './theme'

const useStyle = createUseStyles((theme: Theme) => ({
  container: {
    flex: '0 1 60px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    gap: 60,
    alignItems: 'center',
    '@media (max-width: 560px)': {
      flexDirection: 'column'
    },
    backgroundColor: 'lightGrey',
    padding: 20,
    marginTop: 20,
    borderTop: `4px solid ${theme.medicalBlue}`
  },
  resource: {
    fontSize: 18
  }
}))

export default function Footer () {
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <div className={classes.resource}>
        <Link className='button-39' to='/documents'>
          Documents utiles
        </Link>
      </div>
      <div className={classes.resource}>
        <div>
          <Link to='/plan-du-site'>
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
  )
}

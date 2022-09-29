import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ContactInfo from './components/ContactInfo'
import { Theme } from './theme'

const useStyle = createUseStyles((theme: Theme) => ({
  container: {
    flex: '0 1 60px',
    color: 'white',
    display: 'flex',
    width: '100%',
    backgroundColor: theme.sfBlack,
    justifyContent: 'center',
    '@media (max-width: 560px)': {
      '& $wrapper': {
        flexDirection: 'column',
        gap: 20
      }
    },
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    gap: 60,
    alignItems: 'center',
    padding: 20
  },
  yoga: {
    width: '24.47px',
    height: '27px',
    marginLeft: 5,
    marginTop: -1,
  },
  berange: {
    height: '108px',
  },
  legal: {
    fontSize: 18,
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      textDecoration: 'underline',
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

        <div className={classes.legal}>
          <Link to='/mentions-legales'>
            Mentions légales
          </Link>
          <Link to='/tarifs'>
            Tarifs
          </Link>
          <a href='https://www.green-yoga.fr/'>
            Green Yoga
            <img className={classes.yoga} src='https://www.green-yoga.fr/wp-content/uploads/2021/06/Logo-GY-rbd.png' />
          </a>
        </div>
        <div>
          <ContactInfo />
        </div>
        <div>
          <a href='https://www.cptsdemontpellier1.org/' target='_blank' rel='nofollow noreferrer'>
            <img className={classes.berange} src='images/Logo CPTS Berange.jpg' />
          </a>
        </div>
      </div>

    </div>
  )
}

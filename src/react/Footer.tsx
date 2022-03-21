import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ButtonLink from './components/ButtonLink'

const useStyle = createUseStyles({
  resources: {
    flex: '0 1 60px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 560px)': {
      flexDirection: 'column'
    }
  },
  adress: {
    fontWeight: 'bold',
    color: 'black'
  },
  documents: {

  },
  doctolib: {

  },
  cards: {

  },
  cardsImg: {
    width: 100
  }
})

export default function Footer () {
  const classes = useStyle()
  return (
    <div className={classes.resources}>
      <div className={classes.adress}>
        <div>7 croix d'occitanie</div>
        <div>34400 Restinclières</div>
      </div>
      <div className={classes.documents}>
        <Link className='button-39' to='documents'>
          Documents utiles
        </Link>
      </div>
      <div className={classes.doctolib}>
        <Link className='button-39' to='doctolib'>
          Doctolib
        </Link>
      </div>

      <div className={classes.cards}>
        <img className={classes.cardsImg} src='https://www.institutsandra.pro/public/img/big/carte%20bleue%20200303-zoom-logo-cb.png' />
      </div>

    </div>
  )
}

import React from 'react';

import {createUseStyles} from 'react-jss'
import ButtonLink from './components/ButtonLink';

const useStyle = createUseStyles({
  wrapper: {
    padding: [80, 30],
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.15)), url(\'background.jpg\')',
    backgroundSize: 'cover',
    backgroundPosition: '25% 25%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: '1 1 auto'
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 1400
  },
  button: {
    margin: 30,
    textTransform: 'uppercase'
  },
  resources: {
    display: 'flex',
    paddingTop: 40,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  adress: {
    fontWeight: 'bold',
    color: 'black'
  },
  documents:{

  },
  doctolib: {

  },
  cards: {

  },
  cardsImg: {
    width: 100
  }  
})

const links = [    
  {label: 'Grossesse et post-partum', to: '/grossesse'},
  {label: 'Rééducation périnéale', to: '/reeducation'},
  {label: 'Gynécologie', to: '/gynecologie'},
  {label: 'Preparation a la naissance', to: '/pnp'},
  {label: 'I.V.G.', to: '/ivg'},
  {label: 'Urgences', to: '/urgences', alert: true}
]

export default function Home() {
  const classes = useStyle()
  return (
    <div className={classes.wrapper}>
      <div className={classes.buttons}>        
        {links.map(({label, to, alert = false}) => (
          <div key={to} className={classes.button}>
            <ButtonLink to={to} alert={alert}>
              {label}
            </ButtonLink>
          </div>
        ))}
          
      </div>
      <div className={classes.resources}>
        <div className={classes.adress}>
          <div>7 croix d'occitanie</div>
          <div>34400 Restinclières</div>
        </div>
        <div className={classes.documents}>
          <ButtonLink mini to={'documents'}>
            Documents utiles
          </ButtonLink>
        </div>
        <div className={classes.doctolib}>
          <ButtonLink mini to={'doctolib'}>
            Doctolib
          </ButtonLink>
        </div>

        <div className={classes.cards}>
          <img   className={classes.cardsImg} src="https://www.institutsandra.pro/public/img/big/carte%20bleue%20200303-zoom-logo-cb.png" />
        </div>

      </div>

    </div>
  )
}
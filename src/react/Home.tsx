import React from 'react';

import {createUseStyles} from 'react-jss'
import ButtonLink from './components/ButtonLink';
import PageWrapper from './components/PageWrapper';
import { faStethoscope, faHandHoldingMedical, faDroplet, faBandage, faBaby, faPersonBreastfeeding, faBandAid, faHeartbeat, faHeartPulse} from '@fortawesome/free-solid-svg-icons'

const useStyle = createUseStyles({
  content: {
    maxWidth: 1390,
  },
  buttons: {    
    color: '#111111',
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
    margin: [0, -15],
    pointerEvents: 'initial', 
  },
  '@media (max-width: 1150px)': {
    buttons: {
      flexDirection: 'column',
      gap: 15
    }
  }
})


const links = [    
  {label: 'Grossesse et post-partum', to: 'grossesse-et-post-partum', icon: faPersonBreastfeeding},
  {label: 'Rééducation périnéale', to: 'reeducation-perineale', icon: faHandHoldingMedical},
  {label: 'Gynécologie', to: 'gynecologie', icon: faStethoscope},
  {label: 'Préparation à la naissance', to: 'pnp', icon: faBaby}
]

export default function Home() {
  const classes = useStyle()
  return (
    <PageWrapper style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.15)), url(\'background.jpg\')',
      backgroundPosition: '25% 25%',
    }}>
      <div className={classes.content}>
        <div className={classes.buttons}>        
          {links.map(({label, to, icon}) => (
            <ButtonLink key={to} to={to} icon={icon}>
              {label}
            </ButtonLink>
          ))}
          
        </div>
      </div>
    </PageWrapper>
  )
}
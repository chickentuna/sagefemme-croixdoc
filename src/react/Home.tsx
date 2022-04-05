import React from 'react'

import { createUseStyles } from 'react-jss'
import ButtonLink from './components/ButtonLink/ButtonLink'
import PageWrapper from './components/PageWrapper'
import { faStethoscope, faHandHoldingMedical, faDroplet, faBandage, faBaby, faPersonBreastfeeding, faBandAid, faHeartbeat, faHeartPulse, faAmbulance, faBriefcase, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'
import PageTitle from './components/PageTitle'

const useStyle = createUseStyles({
  emergencyBanner: {

  },
  content: {
    maxWidth: 1390
  },
  buttons: {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: 30
  },
  '@media (max-width: 1150px)': {
    buttons: {
      flexDirection: 'column',
      gap: 30
    }
  }
})

const links = [
  {
    label: 'Grossesse et post-partum',
    to: 'grossesse-et-post-partum',
    icon: faPersonBreastfeeding,
    description: 'Du projet de grossesse jusqu\'à plusieurs plusieurs mois après l\'accouchement.'
  },
  {
    label: 'Rééducation périnéale',
    to: 'reeducation-perineale',
    icon: faHandHoldingMedical,
    description: 'À tout âge, retrouver un tonus musculaire afin de prévenir ou corriger les troubles périnéaux comme les fuites urinaires, les descentes d\'organes, les douleurs lors des rapports sexuels etc.'
  },
  {
    label: 'Gynécologie',
    to: 'gynecologie',
    icon: faStethoscope,
    description: 'Suivi gynécologique, contraception, frottis,  première consultation de l\'adolescente, vaccinations, dépistage des IST, contraception d\'urgence.'
  },
  {
    label: 'Préparation à la naissance',
    to: 'pnp',
    icon: faBaby,
    description: 'Individuelle ou en couple, avec possibilité de séances de Yoga prénatal - préparation des fratries - préparation à l\'accouchement naturel.'
  }
]

export default function Home () {
  const classes = useStyle()
  return (
    <>
      <PageWrapper
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.15)), url(\'images/background.jpg\')',
          backgroundSize: 'cover',
          backgroundPosition: '25% 25%',
          justifyContent: 'center'
        }}
      >
        <div className={classes.content}>
          <PageTitle
            text='Mon cabinet'
            color='white'
          />
          <div className={classes.buttons}>
            {links.map(({ label, to, icon, description }) => (
              <ButtonLink
                key={to}
                to={to}
                icon={icon}
                title={label}
              >
                {description}
              </ButtonLink>
            ))}

          </div>
        </div>
      </PageWrapper>
      <div className={classes.emergencyBanner}>
        <ButtonLink
          to='/urgences'
          inline
          icon={faBriefcaseMedical}
          title={<>Une urgence&nbsp;?</>}
        />
      </div>
    </>
  )
}

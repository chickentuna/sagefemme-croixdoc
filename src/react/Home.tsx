import React from 'react'

import { createUseStyles } from 'react-jss'
import ButtonLink from './components/ButtonLink/ButtonLink'
import PageWrapper from './components/PageWrapper'
import { faStethoscope, faHandHoldingMedical, faDroplet, faBandage, faBaby, faPersonBreastfeeding, faBandAid, faHeartbeat, faHeartPulse, faAmbulance, faBriefcase, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'
import PageTitle from './components/PageTitle'
import Helmet from 'react-helmet'

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
  '@media (max-width: 1230px)': {
    buttons: {
      flexDirection: 'column',
      gap: 30
    }
  }
})

// TODO: Rajouts utltérieurs
// - deux onglets : IVG et échographie
// - probablement une ou deux fichiers mp3

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
    description: 'Fuites urinaires, descente d\'organes, douleurs lors des rapports sexuels... La rééducation permet de retrouver un tonus musculaire. Pour les femmes de tout âge, sans ordonnance.'
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
        helmet='Fanchon RIVOIRE'
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

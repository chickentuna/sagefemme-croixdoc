import React from 'react'

import { createUseStyles } from 'react-jss'
import ButtonLink from './components/ButtonLink/ButtonLink'
import PageWrapper from './components/PageWrapper'
import { faStethoscope, faHandHoldingMedical, faDroplet, faBandage, faBaby, faPersonBreastfeeding, faBandAid, faHeartbeat, faHeartPulse, faAmbulance, faBriefcase, faBriefcaseMedical, faSpa, faDisplay, faLaptopMedical, faSyringe, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import PageTitle from './components/PageTitle'
import Helmet from 'react-helmet'
import isNight from './utils/utils'

const useStyle = createUseStyles({
  emergencyBanner: {

  },
  content: {
    maxWidth: 1390
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 30

  },
  '@media (max-width: 1230px)': {
    buttons: {
      display: 'flex',
      gridTemplateColumns: 'none',
      flexDirection: 'column',
      gap: 30
    }
  }
})

const links: {
  label: string
  disable?: boolean
  to?: string
  icon: IconDefinition
  description?: string
}[] = [
  {
    label: 'Grossesse et post-partum',
    to: 'grossesse-et-post-partum',
    icon: faPersonBreastfeeding,
    description: 'Du projet de grossesse jusqu\'à plusieurs plusieurs mois après l\'accouchement.'
  },
  {
    label: 'Préparation à la naissance',
    // to: 'pnp',
    icon: faBaby,
    description: 'Individuelle ou en couple, avec possibilité de séances de Yoga prénatal - préparation des fratries - préparation à l\'accouchement naturel.'
  },
  {
    label: 'Gynécologie',
    to: 'gynecologie',
    icon: faStethoscope,
    description: 'Suivi gynécologique, contraception, frottis,  première consultation de l\'adolescente, vaccinations, dépistage des IST, contraception d\'urgence.'
  },
  {
    label: 'Rééducation périnéale',
    to: 'reeducation-perineale',
    icon: faHandHoldingMedical,
    description: 'Fuites urinaires, descente d\'organes, douleurs lors des rapports sexuels... La rééducation permet de retrouver un tonus musculaire. Pour les femmes de tout âge.'
  },
  {
    label: 'Vaccination',
    icon: faSyringe,
    description: 'Vaccination contre le papillomavirus, vaccination de la femme enceinte et de tout son entourage'
  },
  {
    label: 'Échographie',
    icon: faLaptopMedical,
    description: 'Échographies en gynécologie et obstétrique.'
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
            {links.map(({ label, to, icon, description, disable }) => (
              <ButtonLink
                key={to}
                to={to}
                disable={disable}
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
          to={`/urgences-${isNight() ? 'nuit' : 'jour'}`}
          inline
          icon={faBriefcaseMedical}
          title={<>Une urgence&nbsp;?</>}
        />
      </div>
    </>
  )
}

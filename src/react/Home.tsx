import React from 'react'

import { createUseStyles } from 'react-jss'
import ButtonLink from './components/ButtonLink'
import PageWrapper from './components/PageWrapper'
import { faStethoscope, faHandHoldingMedical, faDroplet, faBandage, faBaby, faPersonBreastfeeding, faBandAid, faHeartbeat, faHeartPulse, faAmbulance, faBriefcase, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'

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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
  },
  {
    label: 'Rééducation périnéale',
    to: 'reeducation-perineale',
    icon: faHandHoldingMedical,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
  },
  {
    label: 'Gynécologie',
    to: 'gynecologie',
    icon: faStethoscope,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
  },
  {
    label: 'Préparation à la naissance',
    to: 'pnp',
    icon: faBaby,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
  }
]

export default function Home () {
  const classes = useStyle()
  return (
    <>
      <PageWrapper
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.15)), url(\'background.jpg\')',
          backgroundPosition: '25% 25%',
          justifyContent: 'center'
        }}
        title='Mon cabinet'
        whiteTitle
      >
        <div className={classes.content}>
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
          to='/urgence'
          inline
          icon={faBriefcaseMedical}
          title={<>Une urgence&nbsp;?</>}
        />
      </div>
    </>
  )
}

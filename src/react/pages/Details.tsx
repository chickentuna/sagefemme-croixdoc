import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { Timetable } from '../../components/Timetable'
import ContactInfo from '../components/ContactInfo'
import InfoBox from '../components/InfoBox'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import OfficeMap from './interactive/OfficeMap'

const useStyles = createUseStyles((theme: Theme) => ({
  contactBox: {
    display: 'flex',
    flex: 1
  },
  hiddenBox: {
    width: '100%',
    color: '#444444',
    textAlign: 'center',
    padding: '20px 0 30px 0',
    '& h3': {
      color: '#777',
      fontSize: '20px',
      fontWeight: 700,
      margin: '10px 0'
    },
    '& p': {
      fontSize: 14,
      lineHeight: '24px',
      marginBottom: 0,
      padding: 0
    },
    '& img': {
      width: 60
    }
  },
  infoBox: {
    minHeight: 400,
    width: '100%',
    color: '#444444',
    textAlign: 'center',
    boxShadow: '0 0 20px rgb(214 215 216 / 50%)',
    padding: '20px 0 30px 0',
    '& h3': {
      color: '#777',
      fontSize: '20px',
      fontWeight: 700,
      margin: '10px 0'
    },
    '& p': {
      fontSize: 14,
      lineHeight: '24px',
      marginBottom: 0,
      padding: 0
    },
    '& img': {
      width: 60
    }
  },
  content: {
    fontSize: 20,
    maxWidth: 1090,
    display: 'flex',
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
    [`@media (max-width: ${theme.verticalModeThreshold}px)`]: {
      flexDirection: 'column'
    }
  },
  miniText: {
    padding: [2, 20],
    whiteSpace: 'nowrap',
    lineHeight: '24px',
    fontSize: 14
  },
  map: {
    flex: 1
  },
  iframe: {
    width: '100%',
    height: '100%',
    minHeight: 400,
    backgroundColor: theme.babyBlue
  },
  text: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  extra: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  extraA: {
    flex: 1
  },
  extraB: {
    flex: 1
  }
}))

function Details () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Infos pratiques'
    >
      <div className={classes.content}>
        <div className={classes.map}>
          <OfficeMap className={classes.iframe} />
        </div>
        <div className={classes.contactBox}>
          <InfoBox>
            <FontAwesomeIcon icon={faLocationDot} />
            <h3>Adresse&nbsp;:</h3>
            <div className={classes.text}>
              <p>2 rue Paul Valéry
                <br />Zac des Plans
                <br />34160 - RESTINCLIÈRES
                <br />Bus ligne 612 ou 31 - arrêt
              </p>
            </div>
            <h3>Horaires d’ouverture&nbsp;:</h3>
            <Timetable />
          </InfoBox>
        </div>
      </div>
      <div className={classes.content}>
        <InfoBox solid={false}>
          <h3>
            <Link to='www.doctolib.fr'>Prendre RDV</Link>
          </h3>
          <h3>
            <Link to='/tarifs'>Tarifs pratiqués </Link>
          </h3>
          <p>
            <em>Moyens de réglement&nbsp;: CB, chèque, espèces.</em>
          </p>
        </InfoBox>
        <InfoBox solid={false}>
          <img src='https://www.institutsandra.pro/public/img/big/carte%20bleue%20200303-zoom-logo-cb.png'></img>
          <img src='https://abc-signaletique.fr/267-thickbox_default/panneau-acces-handicapes.jpg'></img>
          <p className={classes.miniText}>
            <ContactInfo />
          </p>
        </InfoBox>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Details)

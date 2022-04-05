import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { Timetable } from '../sections/Timetable'
import ContactInfo from '../components/ContactInfo'
import InfoBox from '../components/InfoBox'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import OfficeMap from '../interactive/OfficeMap'

const useStyles = createUseStyles((theme: Theme) => ({
  contactBox: {
    display: 'flex',
    flex: 1,

    '& img': {
      width: 72,
      position: 'absolute',
      top: 10,
      right: 0
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
  tarifBox: {
    '& img': {
      width: 90,
      marginTop: 20,
      marginBottom: 10
    }
  },
  subBox: {
    display: 'flex',
    padding: 20,
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
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
            <img src='https://abc-signaletique.fr/267-thickbox_default/panneau-acces-handicapes.jpg'></img>
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
      <div className={classNames([classes.content, classes.tarifBox])}>
        <div className={classes.subBox}>
          <Link to='/tarifs'>Tarifs pratiqués </Link>
          <img src='https://www.institutsandra.pro/public/img/big/carte%20bleue%20200303-zoom-logo-cb.png'></img>
          <p>
            <em>Moyens de réglement&nbsp;: CB, chèque, espèces.</em>
          </p>
        </div>
        <div className={classes.subBox}>
          <p>
            <ContactInfo />
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Details)

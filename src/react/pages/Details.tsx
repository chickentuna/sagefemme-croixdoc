import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { createUseStyles } from 'react-jss'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import OfficeMap from './interactive/OfficeMap'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090,
    display: 'flex',
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
    '& .contact': {
      display: 'flex',
      flex: 1
    },
    '& .info-box': {
      width: '100%'
    },
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
  grid: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    '& td': {
      padding: [2, 20],
      whiteSpace: 'nowrap',
      lineHeight: '24px',
      fontSize: 14
    }
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
        <div className='contact'>
          <div className='info-box'>
            <FontAwesomeIcon icon={faLocationDot} />
            <h3>Adresse&nbsp;:</h3>
            <div className={classes.text}>
              <p>2 rue Paul Valéry
                <br />Zac des Plans
                <br />34160 - RESTINCLIERES
                <br />Bus ligne 612 ou 31 - arrêt
              </p>
            </div>
            <h3>Horaires d’ouverture&nbsp;:</h3>
            <div className={classes.grid}>
              <table>
                <tbody>
                  <tr>
                    <td>Lundi</td>
                    <td>9h - 16h30</td>
                  </tr>
                  <tr>
                    <td>Mardi</td>
                    <td>13h30 - 21h</td>
                  </tr>
                  <tr>
                    <td>Jeudi</td>
                    <td>9h - 18h</td>
                  </tr>
                  <tr>
                    <td>Vendredi</td>
                    <td>9h - 16h30</td>
                  </tr>
                  <tr>
                    <td>Samedi</td>
                    <td>10h - 15h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Details)

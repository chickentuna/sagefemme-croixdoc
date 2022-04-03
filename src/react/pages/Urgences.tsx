import classNames from 'classnames'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Calculator from './interactive/Calculator'
import { Button, DialogActions, DialogContent } from '@mui/material'
import MedicioButton from '../components/MedicioButton/MedicioButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faCircle, faHouseMedical, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ShowCalculatorButton from './interactive/ShowCalculatorButton'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  blocks: {
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  },

  warningBanner: {
    background: '#3fbbc0',
    color: '#fff',
    backgroundSize: 'cover',
    padding: '60px 30px'
  },
  warningBannerContent: {
    fontSize: 18,
    textAlign: 'center',
    '& p': {
      textAlign: 'left',
    },
    '& strong': {
      color: 'white',
      fontWeight: 900,
      paddingRight: 10
    },
    maxWidth: 1090,
    margin: 'auto'
  },
  theBitAtTheBottom: {
    alignItems: 'center',
    padding: [20, 30, 50, 30],
    maxWidth: 1090,
    margin: 'auto',
    fontSize: 20,
    display: 'flex',
    flexFlow: 'column',
    gap: 30
  },
  price: {
    textAlign: 'justify'
  },
  buttons: {
    display: 'flex',
    flexFlow: 'row',
    gap: 30,
    justifyContent: 'center',
    alignItems: 'stretch',
    minWidth: 300,
    marginTop: 30
  },
  button: {
    borderStyle: 'solid',
    maxWidth: 300,
    width: '100%',
    padding: 10,
    fontSize: 16,
    lineHeight: 1.2,
    borderRadius: 10,
    color: 'black',
    borderColor: theme.sfBlack,
    borderWidth: 2,
    '&:hover': {
      opacity: 0.80,
      color: 'black'
    }
  },
  buttonA: {
    backgroundColor: theme.pink,
  },
  buttonB: {
    backgroundColor: theme.babyBlue,
  },
  decoration: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20,
    width: '100%',
    maxWidth: 600
  }
}))

function Urgences () {
  const classes = useStyles()

  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <PageWrapper
        title='Urgences'
      >
        <div className={classes.content}>
          <div className={classes.blocks}>
            <ContentBlock
              imageUrl='https://image.shutterstock.com/z/stock-photo-newborn-yellow-chicken-hatching-from-egg-330216119.jpg'
              landscape
            >
              <h4>Votre sage-femme libérale peut vous recevoir en urgence sur les horaires d’ouverture du cabinet, notamment pour&nbsp;:</h4>
              <List>
                <li>Des difficultés&nbsp;/&nbsp;douleurs liées à l’allaitement</li>
                <li>Une suspicion de rupture de la poche des eaux</li>
                <li>Une mycose, une infection urinaire</li>
                <li>Des conseils de prévention&nbsp;/&nbsp;contraception d’urgence suite à des rapports sexuels non protégés, consentis ou non</li>
              </List>
              <Disclaimer>
                Merci de téléphoner avant afin de vous assurer de ma présence (absence possible du cabinet lors de visites à domicile)
              </Disclaimer>
            </ContentBlock>

            <ContentBlock
              imageUrl='https://image.shutterstock.com/z/stock-photo-pregnant-african-american-woman-having-prenatal-contractions-worried-husband-calling-doctor-on-1851371650.jpg'
              landscape
              flip
            >
              <h4>Consultations de nuit à domicile, entre 21h et 6h pour&nbsp;:</h4>
              <List>
                <li>Un diagnostic de début de travail <u>à terme</u> (au delà de 37 SA)</li>
                <li>Une suspicion de rupture de la poche des eaux</li>
              </List>
              <Disclaimer>
                Disponibilité variable, du fait de gardes en maternité ou d’impératif personnel, merci de vous référer au tableau <span style={{ background: 'red' }}>à droite</span> de cette page
              </Disclaimer>
              <div className={classes.buttons}>
                <a
                  href='/quand-aller-aux-urgences'
                  className={classes.button + ' ' + classes.buttonA}
                >
                  Grossesse&nbsp;: quand aller consulter en urgence&nbsp;?
                </a>
                <ShowCalculatorButton
                  className={classes.button + ' ' + classes.buttonB}
                />
              </div>
            </ContentBlock>
          </div>
        </div>
      </PageWrapper>
      <div className={classes.warningBanner}>
        <div className={classes.warningBannerContent}>
          <p><strong>ATTENTION&nbsp;:</strong> pour les autres motifs (saignements, diminution des mouvements de bébé, contractions avant terme, fièvre&nbsp;…),
            vous avez besoin d’être vue par un <u>médecin</u> et de faire des <u>examens complémentaires pour lesquels je ne suis pas équipée</u>.
          </p>
          Merci de vous rendre <b>DIRECTEMENT AUX URGENCES</b> ou <b>contactez le 15.</b>
        </div>
      </div>
      <div className={classes.theBitAtTheBottom}>
        <div className={classes.price}>
          Ces visites sont prises en charge à 100% par la sécurité sociale.
          Cependant, en cas de déplacement de nuit en zone éloignée du cabinet (supérieur à 15 km),
          notamment sur les villes de Nîmes, Montpellier, Castelnau-Le-Lez,
          un dépassement d’honoraires sous la forme d’un forfait de 30 euros <u>non remboursables</u> par la sécurité sociale sera appliqué.
        </div>

        <div className={classes.decoration}>
          <FontAwesomeIcon icon={faHouseMedical} />
          <FontAwesomeIcon style={{ fontSize: 8 }} icon={faCircle} />
          <FontAwesomeIcon style={{ fontSize: 8 }} icon={faCircle} />
          <FontAwesomeIcon icon={faCarSide} />
          <FontAwesomeIcon style={{ fontSize: 8 }} icon={faCircle} />
          <FontAwesomeIcon style={{ fontSize: 8 }} icon={faCircle} />
          <FontAwesomeIcon icon={faHouseUser} />
        </div>
      </div>
    </>
  )
}

export default React.memo(Urgences)

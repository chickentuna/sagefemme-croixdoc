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
      color: '#f00000',
      fontWeight: 900
    },
    maxWidth: 1090,
    margin: 'auto'
  },
  theBitAtTheBottom: {
    padding: [20, 30, 50, 30],
    maxWidth: 1090,
    margin: 'auto',
    fontSize: 20,
    display: 'flex',
    flexFlow: 'row wrap',
    gap: 30
  },
  price: {
    flex: 1,
    minWidth: 540
  },
  buttons: {
    display: 'flex',
    flexFlow: 'column',
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    minWidth: 300
  },
  buttonA: {
    backgroundColor: theme.pink,
    maxWidth: 300,
    width: '100%',
    minHeight: 80,
    '&:hover': {
      opacity: 0.80
    }
  },
  buttonB: {
    backgroundColor: theme.babyBlue,
    maxWidth: 300,
    width: '100%',
    minHeight: 80,
    '&:hover': {
      opacity: 0.80
    }
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
        <div className={classes.buttons}>
          <button className={classes.buttonA}>Grossesse : Quand aller consulter en urgence ?</button>
          <button onClick={() => (setShowPopup(true))} className={classes.buttonB}>Suis-je à terme ?</button>
        </div>

      </div>
      <Dialog onClose={() => (setShowPopup(false))} open={showPopup}>
        <DialogTitle>Suis-je à terme ?</DialogTitle>
        <DialogContent>
          <Calculator />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setShowPopup(false)}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default React.memo(Urgences)

import { faCarSide, faCircle, faHouseMedical, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import Dash from '../components/Dash'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import ShowCalculatorButton from '../interactive/ShowCalculatorButton'
import NumbersTable from '../sections/NumbersTable'
import AbsenceTable from '../sections/AbsenceTable'
import { Link } from 'react-router-dom'

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
    backgroundSize: 'cover',
    padding: '35px 30px',
    border: `5px solid ${theme.medicalBlue}`
  },
  warningBannerContent: {
    fontSize: 18,
    textAlign: 'justify',
    '& p': {
      textAlign: 'left',
    },
    '& strong': {
    },
    maxWidth: 1090,
    margin: 'auto'
  },
  attention: {
    fontWeight: 900,
    paddingRight: 5
  },
  theBitAtTheBottom: {
    alignItems: 'center',
    padding: [20, 30, 50, 30],
    maxWidth: 1090,
    margin: 'auto',
    fontSize: 20,
    display: 'flex',
    flexFlow: 'column',
    gap: 30,
    '& h4': {
      marginTop: 60
    }
  },
  visits: {
    display: 'flex',
    gap: 60
  },
  price: {
    textAlign: 'justify',
    flex: 2
  },
  table: {
    flex: 1
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
    textAlign: 'center',
    maxWidth: 300,
    width: '100%',
    lineHeight: 1.2,
    color: 'white',
    borderWidth: 0,
    borderRadius: '40px',
    textTransform: 'uppercase',
    fontSize: 14,
    padding: [10, 20],
    fontWeight: 'bold',
    transition: 'all 150ms ease-out',
    // backgroundColor: theme.medicalBlue,
    backgroundColor: 'lightcoral',

    '&:hover': {
      opacity: 0.80,
      color: 'white',
      // backgroundColor: theme.medicalBlueHover
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
  },
  phoneNumbers: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
  }
}))

function Urgences () {
  const classes = useStyles()

  const WarningBanner = () => (
    <div className={classes.warningBanner}>
      <div className={classes.warningBannerContent}>
        <p><strong className={classes.attention}>ATTENTION&nbsp;:</strong> pour les autres motifs (saignements, diminution des mouvements de bébé, contractions avant terme, fièvre&nbsp;…),
          vous avez besoin d’être vue par un <strong>médecin</strong> et de faire des <strong>examens complémentaires pour lesquels je ne suis pas équipée</strong>.
        </p>
        Merci de vous rendre <b>DIRECTEMENT AUX URGENCES</b> ou <b>contactez le 15.</b>
      </div>
    </div>
  )

  return (
    <>
      <PageWrapper
        title='Urgences'
      >
        <div className={classes.content}>
          <div className={classes.blocks}>
            <ContentBlock
              imageUrl='images/egg.jpg'
              landscape
            >
              <h4>Votre sage-femme libérale peut vous recevoir en urgence sur les horaires d’ouverture du cabinet, notamment pour&nbsp;:</h4>
              <List>
                <li>Des difficultés/douleurs liées à l’allaitement</li>
                <li>Une suspicion de rupture de la poche des eaux</li>
                <li>Une mycose, une infection urinaire</li>
                <li>Des conseils de prévention/contraception d’urgence suite à des rapports sexuels non protégés, consentis ou non</li>
              </List>
              <Disclaimer>
                Merci de téléphoner avant afin de vous assurer de ma présence (absence possible du cabinet lors de visites à domicile)
              </Disclaimer>
            </ContentBlock>

            <WarningBanner />
            <ContentBlock
              imageUrl='images/time_to_go.jpg'
              landscape
              flip
            >
              <h4>Consultations de nuit à domicile, entre 21h et 6h pour&nbsp;:</h4>
              <List>
                <li>Un diagnostic de début de travail <strong>à terme</strong> (au delà de 37 SA)</li>
                <li>Une suspicion de rupture de la poche des eaux</li>
              </List>

              <div className={classes.buttons}>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to='/quand-aller-aux-urgences'
                  className={classes.button}
                >
                  Grossesse&nbsp;: quand aller consulter en urgence&nbsp;?
                </Link>
                <ShowCalculatorButton
                  className={classes.button}
                />
              </div>

              <Disclaimer>
                Disponibilité variable, du fait de gardes en maternité ou d’impératif personnel,
                merci de vous référer au tableau ci-dessous
              </Disclaimer>
            </ContentBlock>
          </div>
        </div>
      </PageWrapper>
      <div className={classes.theBitAtTheBottom}>
        <div className={classes.visits}>
          <div className={classes.price}>
            Ces visites sont prises en charge à 100% par la sécurité sociale.
            Cependant, en cas de déplacement de nuit en zone éloignée du cabinet (supérieur à 15 km),
            notamment sur les villes de Nîmes, Montpellier, Castelnau-Le-Lez,
            un dépassement d’honoraires sous la forme d’un forfait de 30 euros <strong>non remboursables</strong> par la sécurité sociale sera appliqué.
          </div>
          <div className={classes.table}>
            <AbsenceTable />
          </div>
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
        <div className={classes.phoneNumbers}>
          <h4>Numéros d'urgences</h4>
          <Dash />
          <NumbersTable />
        </div>
      </div>
    </>
  )
}

export default React.memo(Urgences)

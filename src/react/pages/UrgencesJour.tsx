import { faCarSide, faCircle, faHouseMedical, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ContentBlock from '../components/ContentBlock'
import Dash from '../components/Dash'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import ShowCalculatorButton from '../interactive/ShowCalculatorButton'
import AbsenceTable from '../sections/AbsenceTable'
import NumbersTable from '../sections/NumbersTable'
import { Theme } from '../theme'
import WarningBanner from './WarningBanner'

const useStyles = createUseStyles((theme: Theme) => ({
  '@media (max-width: 603px)': {
    button: {
      '&&': {
        height: 50
      }
    },
    buttons: {
      '&&': {
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center'
      }
    },
    visits: {
      '&&': {
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center'
      }
    }
  },
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  blocks: {
    display: 'flex',
    flexFlow: 'column',
    gap: 60
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
      marginTop: 10,
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
    backgroundColor: 'lightcoral',

    '&:hover': {
      opacity: 0.80,
      color: 'white'
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
  },
  tableContainer: {
    marginTop: 30
  },
  intro: {
    marginBottom: 60
  }
}))

function Urgences () {
  const classes = useStyles()
  return (
    <>
      <PageWrapper
        title='Urgences de jour'
      >
        <div className={classes.content}>

          <h4>Votre sage-femme libérale peut vous recevoir en urgence sur les horaires d’ouverture du cabinet.</h4>
          <div className={classes.intro}>
            <Disclaimer>
              Merci de téléphoner avant afin de vous assurer de ma présence
              (absence possible du cabinet lors de visites à domicile).
              Vous pouvez aussi trouver des créneaux d’urgence sur Doctolib, ainsi que des téléconsultations.
            </Disclaimer>
          </div>

          <div className={classes.blocks}>

            <ContentBlock
              imageUrl='images/egg.jpg'
              landscape
            >
              <h4>Grossesse</h4>
              <List>
                <li>Suspicion de rupture de la poche des eaux</li>
                <li>Diagnostic de début de travail à terme (au delà de 37 SA)</li>
                <li>Difficultés/douleurs liées à l’allaitement</li>
                <li>Une inquiétude, une angoisse</li>
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
            </ContentBlock>

            <ContentBlock
              flip
              imageUrl='images/floral.jpg'
              landscape
            >
              <h4>Gynécologie</h4>
              <List>
                <li>Mycose, une infection urinaire</li>
                <li>Conseils de prévention/contraception d’urgence suite à des rapports sexuels non protégés, consentis ou non</li>
                <li>Dépannage d’ordonnance</li>
              </List>
            </ContentBlock>

            <WarningBanner />
          </div>
        </div>
      </PageWrapper>
      <div className={classes.theBitAtTheBottom}>
        <div className={classes.phoneNumbers}>
          <h4>Numéros d'urgences</h4>
          <Dash />
          <div className={classes.tableContainer}>
            <NumbersTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Urgences)

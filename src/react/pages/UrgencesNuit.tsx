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
      marginTop: 60,
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
  },
  tableContainer: {
    marginTop: 30
  }
}))

function UrgencesNuit () {
  const classes = useStyles()

  return (
    <>
      <PageWrapper
        title=' Permanence sage-femme de nuit'
      >
        <div className={classes.content}>
          <div className={classes.blocks}>
            <ContentBlock
              imageUrl='images/time_to_go.jpg'
              landscape
              flip
            >
              <h4>Consultations de nuit à domicile, entre 21h et 6h pour&nbsp;:</h4>
              <List>
                <li>Un diagnostic de début de travail <strong>à terme</strong> (au delà de 37 SA)</li>
                <li>Une suspicion de rupture de la poche des eaux</li>
                <li>Un engorgement mammaire</li>
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
              imageUrl='images/blues.jpg'
              landscape
            >
              <List>
                <li>Une crise d'angoisse liée à la grossesse</li>
                <li>Une détresse face aux pleurs incessants du nouveau né et du nourrisson</li>
                <li>Une détresse psychologique suite à une I.V.G.</li>
              </List>

              <Disclaimer>
                Disponibilité variable, du fait de gardes en maternité ou d’impératif personnel,
                merci de vous référer au tableau ci-dessous
              </Disclaimer>
            </ContentBlock>
          </div>
        </div>
        <div style={{ marginTop: 50 }}>
          <WarningBanner />
        </div>
      </PageWrapper>
      <div className={classes.theBitAtTheBottom}>
        <div className={classes.visits}>
          <div className={classes.price}>
            Ces visites sont prises en charge à 100% par la sécurité sociale, durant la grossesse et jusqu'à 12 jours après l'accouchement. En dehors de cette période, elles sont prises en charge à 70%, le reste vous sera alors remboursé par votre mutuelle.
            <br />
            <br />Le déplacement se fait dans la limite de 30 minutes de route, soit environ 15km autour du cabinet situé à Restinclières.
            <br />
            <br /> Si vous êtes suivie par une autre sage-femme, une fiche de liaison à l'attention de celle-ci vous sera remise afin
            d'optimiser la fluidité des soins.
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
          <div className={classes.tableContainer}>
            <NumbersTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(UrgencesNuit)

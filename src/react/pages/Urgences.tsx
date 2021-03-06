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

function Urgences () {
  const classes = useStyles()

  const WarningBanner = () => (
    <div className={classes.warningBanner}>
      <div className={classes.warningBannerContent}>
        <p><strong className={classes.attention}>ATTENTION&nbsp;:</strong> pour les autres motifs (saignements, diminution des mouvements de b??b??, contractions avant terme, fi??vre&nbsp;???),
          vous avez besoin d?????tre vue par un <strong>m??decin</strong> et de faire des <strong>examens compl??mentaires pour lesquels je ne suis pas ??quip??e</strong>.
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
              <h4>Votre sage-femme lib??rale peut vous recevoir en urgence sur les horaires d???ouverture du cabinet, notamment pour&nbsp;:</h4>
              <List>
                <li>Des difficult??s/douleurs li??es ?? l???allaitement</li>
                <li>Une suspicion de rupture de la poche des eaux</li>
                <li>Une mycose, une infection urinaire</li>
                <li>Des conseils de pr??vention/contraception d???urgence suite ?? des rapports sexuels non prot??g??s, consentis ou non</li>
              </List>
              <Disclaimer>
                Merci de t??l??phoner avant afin de vous assurer de ma pr??sence (absence possible du cabinet lors de visites ?? domicile)
              </Disclaimer>
            </ContentBlock>

            <WarningBanner />
            <ContentBlock
              imageUrl='images/time_to_go.jpg'
              landscape
              flip
            >
              <h4>Consultations de nuit ?? domicile, entre 21h et 6h pour&nbsp;:</h4>
              <List>
                <li>Un diagnostic de d??but de travail <strong>?? terme</strong> (au del?? de 37 SA)</li>
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

              <Disclaimer>
                Disponibilit?? variable, du fait de gardes en maternit?? ou d???imp??ratif personnel,
                merci de vous r??f??rer au tableau ci-dessous
              </Disclaimer>
            </ContentBlock>

            <ContentBlock
              imageUrl='images/blues.jpg'
              landscape
            >
              <List>
                <li>Une crise d'angoisse li??e ?? la grossesse</li>
                <li>Une d??tresse face aux pleurs incessants du nouveau n?? et du nourrisson</li>
                <li>Une d??tresse psychologique suite ?? une I.V.G.</li>
              </List>
            </ContentBlock>
          </div>
        </div>
      </PageWrapper>
      <div className={classes.theBitAtTheBottom}>
        <div className={classes.visits}>
          <div className={classes.price}>
            Ces visites sont prises en charge ?? 100% par la s??curit?? sociale, durant la grossesse et jusqu'?? 12 jours apr??s l'accouchement. En dehors de cette p??riode, elles sont prises en charge ?? 70%, le reste vous sera alors rembours?? par votre mutuelle.
            <br />
            <br />Cependant, en cas de d??placement de nuit en zone ??loign??e du cabinet (sup??rieur ?? 15 km),
            notamment sur les villes de N??mes, Montpellier, Castelnau-Le-Lez,
            un d??passement d???honoraires sous la forme d???un forfait de 30 euros <strong>non remboursables</strong> par la s??curit?? sociale sera appliqu??.
            <br />
            <br /> Si vous ??tes suivie par une autre sage-femme, une fiche de liaison ?? l'attention de celle-ci vous sera remise afin
            d'optimiser la fluidit?? des soins.
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
          <h4>Num??ros d'urgences</h4>
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

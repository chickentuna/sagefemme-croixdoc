
import { faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Timetable } from '../sections/Timetable'
import Disclaimer from '../components/Disclaimer'
import InfoBox from '../components/InfoBox'
import PageWrapper from '../components/PageWrapper'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1090,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    marginBottom: 30
  },
  block: {
    maxWidth: 810,
    padding: [20, 60],
    margin: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  duoBlock: {
    display: 'flex',
    flexDirection: 'column',
    '&>div': {
      flex: 1
    }
  }
})

function Resources () {
  const classes = useStyles()
  return (
    <>
      <PageWrapper
        title='Contact'
      >
        <div className={classes.content}>
          <div className={classes.duoBlock}>
            <InfoBox className={classes.block}>
              <FontAwesomeIcon className={classes.icon} icon={faPhoneFlip} />
              <strong>06 23 15 23 44</strong>
              <h3>Horaires d’ouverture du cabinet&nbsp;:</h3>
              <Timetable />
              <div>
                <p>Fermeture le mercredi et le dimanche</p>
              </div>
              <Disclaimer>
                Merci de noter que je ne répond pas au téléphone pendant mes consultations.
                En revanche, je le vérifie entre chacune d’entre elles et m’efforce de vous rappeler au plus vite.
              </Disclaimer>
            </InfoBox>

            <InfoBox className={classes.block}>
              <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
              <a href='mailto:contact@sfrivoire-restinclieres.com'>contact@sfrivoire-restinclieres.com</a>
              {
              /*
              <h3>Formulaire de contact</h3>
              <form>
                <TextField fullWidth required margin='normal' variant='outlined' label='Votre nom' />
                <TextField fullWidth required margin='normal' type='email' variant='outlined' label='Votre e-mail' />
                <TextField fullWidth required margin='normal' multiline variant='outlined' label='Votre message' rows={4} />
                <Button style={{ marginTop: 20 }} variant='contained'>
                  Envoyer
                </Button>
              </form>
              */
              }
            </InfoBox>
          </div>
        </div>
      </PageWrapper>

    </>
  )
}

export default React.memo(Resources)

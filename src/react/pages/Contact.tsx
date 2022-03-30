
import { faDownload, faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ContactInfo from '../components/ContactInfo'
import ContentBlock from '../components/ContentBlock'
import Disclaimer from '../components/Disclaimer'
import { Timetable } from '../../components/Timetable'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import { waifu } from '../utils/placeholder'
import { Button, FormControl, FormLabel, Paper, TextField } from '@mui/material'
import InfoBox from '../components/InfoBox'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  block: {
    maxWidth: 990,
    padding: [20, 60],
    margin: 15,
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
}))

function Resources () {
  const classes = useStyles()
  return (
    <>
      <PageWrapper
        title='Contact'
      >
        <div className={classes.content}>
          <InfoBox className={classes.block}>
            <a href='mailto:cabsagefemme-croix@gmail.com'><FontAwesomeIcon icon={faEnvelope} /> cabsagefemme-croix@gmail.com</a>
          </InfoBox>

          <InfoBox className={classes.block}>
            <FontAwesomeIcon icon={faPhoneFlip} />
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
            <h3>Formulaire de contact</h3>
            <form>
              <FormControl>
                <TextField required margin='normal' variant='outlined' label='Votre nom' />
                <TextField required margin='normal' type='email' variant='outlined' label='Votre e-mail' />
                <TextField required margin='normal' multiline variant='outlined' label='Votre message' rows={4} />
                <Button style={{ marginTop: 20 }} variant='contained'>
                  Envoyer
                </Button>
              </FormControl>
            </form>
          </InfoBox>
        </div>
      </PageWrapper>

    </>
  )
}

export default React.memo(Resources)

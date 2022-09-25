
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
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
  }
}))

function WarningBanner () {
  const classes = useStyles()

  return (
    <div className={classes.warningBanner}>
      <div className={classes.warningBannerContent}>
        <p><strong className={classes.attention}>ATTENTION&nbsp;:</strong> pour les autres motifs (saignements avec une douleur au ventre qui ne passe pas, diminution des mouvements de bébé, contractions avant terme, fièvre&nbsp;…),
          vous avez besoin d’être vue par un <strong>médecin</strong> et de faire des <strong>examens complémentaires pour lesquels je ne suis pas équipée</strong>.
        </p>
        Merci de vous rendre <b>DIRECTEMENT AUX URGENCES</b> ou <b>contactez le 15.</b>
      </div>
    </div>
  )
}

export default React.memo(WarningBanner)

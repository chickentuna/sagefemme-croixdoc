import { faClose, faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

const useStyle = createUseStyles({
  popupContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'

  },
  mainContent: {
    fontSize: 20,
    padding: [30, 6, 0, 6],
    textAlign: 'justify'
  },
  details: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16
  },
  detailsTitle: {
    color: theme.sfBlack,
    margin: [10, 0],
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.2
  },
  detailsTable: {
    display: 'flex',
    textAlign: 'left',
    justifyContent: 'center',
    color: theme.sfBlack,
    flexDirection: 'column',
    alignItems: 'center',
    '& table': {
      textAlign: 'center',
      marginBottom: 10,
    },
    '& em': {
      textAlign: 'center',
      marginBottom: 0
    },
    '& p': {
      fontSize: 18
    },
    '& td': {
      textAlign: 'left',
      padding: [5, 22],
      fontSize: 18,
      lineHeight: '24px',
      whiteSpace: 'nowrap'
    }
  },
  detailsDisclaimer: {
    width: '100%',
    textAlign: 'left',
    fontSize: 13,
    fontWeight: 'bold'
  },
  banner: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 30,
    color: '#ffe599',
    '& h2': {
      color: 'white',
      margin: [10, 0, 0, 0],
      fontSize: 26,
      fontWeight: 'bold'
    }
  }
})

if (location.pathname.length > 1 && location.pathname.endsWith('/')) {
  location.replace(location.pathname.slice(0, location.pathname.length - 1))
}

// TODO: domain & emails

export default function App () {
  const classes = useStyle()

  const [showPopup, setShowPopup] = useState(true)
  const closePopup = useCallback(() => setShowPopup(false), [setShowPopup])

  return (
    <Dialog
      maxWidth='md'
      open={showPopup}
      onClose={closePopup}
      PaperProps={{ sx: { maxWidth: 845 } }}
    >
      <DialogTitle sx={{
        textAlign: 'center',
        background: theme.medicalBlue
      }}
      >
        <div className={classes.banner}>
          <FontAwesomeIcon icon={faWarning} />
          <h2>En attendant la fin des travaux dans mon cabinet, je pratique exclusivement des soins à domicile.</h2>
        </div>
        <IconButton
          onClick={closePopup}
          sx={{
            position: 'absolute',
            width: 40,
            right: 8,
            top: 8,
            color: 'white'
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className={classes.popupContent}>
          <div className={classes.mainContent}>
            Ces soins comprennent notamment monitorings, consultations de grossesse,
            diagnostic de début de travail, diagnostic de rupture de la poche des eaux,
            consultations mère/enfant au retour de la maternité, soutien à l’allaitement,
            rééducation périnéale&nbsp;…
          </div>
          <div className={classes.details}>
            <h3 className={classes.detailsTitle}>
              Horaires provisoires
            </h3>
            <div className={classes.detailsTable}>
              <table>
                <tbody>
                  <tr>
                    <td>Lundi</td>
                    <td>9h - 16h30</td>
                  </tr>
                  <tr>
                    <td>Jeudi</td>
                    <td>9h30 - 18h</td>
                  </tr>
                  <tr>
                    <td>Samedi</td>
                    <td>10h - 17h</td>
                  </tr>
                </tbody>
              </table>
              <em>
                Pour les diagnostics de rupture des membranes,
                diagnostic de début de travail à terme, et problèmes liés à l’allaitement:
              </em>
              <table>
                <tbody>
                  <tr>
                    <td>Nuit 7/7</td>
                    <td>21h - 6h</td>
                  </tr>
                </tbody>
              </table>
              <p> </p>
            </div>
            <em className={classes.detailsDisclaimer}>
              Indisponibilités exceptionnelles possibles
            </em>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

const useStyle = createUseStyles({
  popupContent: {
    display: 'flex',
    alignItems: 'center',
    [`@media (max-width: ${theme.verticalModeThreshold}px)`]: {
      flexDirection: 'column'
    }
  },
  contentA: {
    flex: 3,
    fontSize: 22,
    padding: 12,
    textAlign: 'justify'
  },
  contentB: {
    flex: 2,
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16
  },
  contentBSection1: {
    color: theme.sfBlack,
    margin: [10, 0],
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.2
  },
  contentBSection2: {
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
    '& p': {
      textAlign: 'justify'
    },
    '& td': {
      textAlign: 'left',
      padding: [2, 20],
      fontSize: 14,
      lineHeight: '24px',
      whiteSpace: 'nowrap'
    }
  },
  contentBSection3: {
    width: '100%',
    textAlign: 'right',
    fontSize: 13,
    fontWeight: 'bold'
  },
})

if (location.pathname.length > 1 && location.pathname.endsWith('/')) {
  location.replace(location.pathname.slice(0, location.pathname.length - 1))
}

// TODO: domain & emails

// TODO: https://docs.google.com/presentation/d/1cI5uBzxaHjU12viFa80hgQiZotB-HYundOpxlOctgqY/edit#slide=id.g11d7b2e82e5_0_5
// temp intro POPuP
export default function App () {
  const classes = useStyle()

  const [showPopup, setShowPopup] = useState(true)

  return (
    <Dialog maxWidth='lg' open={showPopup}>
      <DialogTitle sx={{
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        background: theme.sfBlack
      }}
      >
        En attendant la fin des travaux dans mon cabinet, je pratique exclusivement des soins à domicile.
      </DialogTitle>
      <DialogContent>
        <div className={classes.popupContent}>
          <div className={classes.contentA}>
            Ces soins comprennent notamment monitorings, consultations de grossesse,
            diagnostic de début de travail, diagnostic de rupture de la poche des eaux,
            consultations mère&nbsp;/&nbsp;enfant au retour de la maternité, soutien à l’allaitement,
            rééducation périnéale&nbsp;…
          </div>
          <div className={classes.contentB}>
            <h3 className={classes.contentBSection1}>
              Horaires provisoires
            </h3>
            <div className={classes.contentBSection2}>
              <table>
                <tbody>
                  <tr>
                    <td>Lundi</td>
                    <td>9h - 16h30</td>
                  </tr>
                  <tr>
                    <td>Jeudi</td>
                    <td>9h30 - 16h30</td>
                  </tr>
                  <tr>
                    <td>Samedi</td>
                    <td>10h - 18h</td>
                  </tr>
                  <tr>
                    <td>Vendredi</td>
                    <td>9h - 16h30</td>
                  </tr>
                  <tr>
                    <td>Samedi</td>
                    <td>10h - 15h</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Nuit 7/7 21h - 6h, pour les diagnostics de rupture des membranes,
                diagnostic de début de travail à terme, et problèmes liés à l’allaitement
              </p>
            </div>
            <em className={classes.contentBSection3}>
              Indisponibilités exceptionnelles possibles
            </em>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setShowPopup(false)}>
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  )
}

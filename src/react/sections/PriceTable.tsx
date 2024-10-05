import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { createUseStyles } from 'react-jss'
import { theme, Theme } from '../theme'
import Disclaimer from '../components/Disclaimer'

function createData (
  acte: string,
  montant: number,
  prise: number
) {
  const montantEur = montant.toLocaleString('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  })
  const prisePer = prise + '%'
  const reste = (montant - montant * prise / 100).toLocaleString('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  })
  return { acte, montant: montantEur, prise: prisePer, reste }
}

const categories = [
  {
    title: 'Grossesse et post-partum',
    data: [
      createData('Consultation', 26.50, 70),
      createData('Entretien prénatal précoce', 46.50, 100),
      createData('Bilan prénatal', 39.06, 100),
      createData('Préparation à la Naissance 1 famille', 37.20, 100),
      createData('Préparation à la Naissance 2-3 familles', 35.96, 100),
      createData('Préparation à la Naissance 4-6 familles', 18.60, 100),
      createData('Entretien post-natal', 37.20, 70),
      createData('Séances post-natales', 27.90, 70),
      createData('Accompagnement à la parentalité (au delà des 7 premières séances), individuel', 38.75, 0),
      createData('Accompagnement à la parentalité (au delà des 7 premières séances), en groupe', 60.14, 0),
      createData('Atelier fratries (hors PNP)', 25.00, 0),
      createData('Séance de Yoga Prénatal collectif, hors préparation à la naissance', 15.00, 0),
      createData('observation grossesse pathologique avec ERCF - grossesse unique', 48.36, 100),
      createData('observation grossesse pathologique avec ERCF - grossesse multiple', 70.06, 100),
      createData('ERCF sans prescription grossesse unique', 38.75, 100),
      createData('ERCF sans prescription grossesse multiple', 60.14, 100),
    ]
  },

  {
    title: 'Gynécologie',
    data: [
      createData('Consultation', 26.50, 70),
      createData('première consultation de contraception et de prévention pour les jeunes filles de 15 à 17 ans inclus', 47.50, 100),
      createData('Suivi de rééducation périnéale', 23.25, 70),
      createData('Frottis cervicol-vaginal', 38.96, 70),
      createData('Ablation ou changement d’implant sous-cutané', 41.80, 70),
      createData('Pose d’un Dispositif Intra-Utérin', 38.40, 70),
      createData('Changement d’un Dispositif Intra-Utérin', 38.40, 70),
      createData('Ablation d’un dispositif intra-utérin par un matériel intra-utérin de préhension, par voie vaginale', 69.44, 70),
    ]
  },
  {
    title: 'Visite à Domicile',
    data: [
      createData('Visite à domicile', 30.50, 70),
      createData('Observation et traitement à domicile d’une grossesse nécessitant, sur prescription du médecin, une surveillance intensive', 31.90, 100),
      createData('Surveillance à domicile mère-enfant de J2 à J12, les deux premières fois, un seul enfant', 61.15, 100),
      createData('Surveillance à domicile mère-enfant de J2 à J12, vistes suivantes, un seul enfant', 47.20, 100),
      createData('Surveillance à domicile mère-enfant de J2 à J12, les deux premières fois, naissance multiple', 75.30, 100),
      createData('Surveillance à domicile mère-enfant de J2 à J12, vistes suivantes, naissance multiple', 62.70, 100),
    ]
  },
  {
    title: 'Majorations',
    data: [
      createData('Majoration sortie précoce', 25.00, 100),
      createData('Majoration dimanche et jour férié', 21.00, 100),
      createData('Majoration de nuit de 20 h à 0 h et de 6 h à 8 h', 35.00, 100),
      createData('Majoration de nuit de 0 h à 6 h', 40.00, 100),
      createData('Majoration pour soins d’urgence faits au cabinet après examen en urgence d’un patient', 26.88, 70),
    ]
  }
]

function PriceTable () {
  const small = window.innerWidth < 500

  return (
    <>
      <TableContainer component={Paper}>
        <Table size='small' aria-label='a dense table'>
          <TableBody>
            {categories.map((category) => (
              <React.Fragment key={category.title}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.01071em',
                      display: 'table-cell',
                      borderBottom: '1px solid rgb(224, 224, 224)',
                      textAlign: 'center',
                      padding: '16px',
                      backgroundColor: theme.medicalBlue,
                      color: 'white'
                    }} colSpan={4}
                  >{category.title}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{
                    fontSize: small ? '0.6rem' : '0.875rem'
                  }}
                  >Acte
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: small ? '0.6rem' : '0.875rem'
                    }}
                    align='right'
                  >Montant
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: small ? '0.6rem' : '0.875rem'
                    }}
                    align='right'
                  >Prise en charge SS
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: small ? '0.6rem' : '0.875rem'
                    }}
                    align='right'
                  >Reste à charge /&nbsp;PEC mutuelle
                  </TableCell>
                </TableRow>
                {category.data.map((row) => (
                  <TableRow
                    key={row.acte}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      sx={{
                        fontSize: small ? '0.6rem' : '0.875rem'
                      }} component='th' scope='row'
                    >
                      {row.acte}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: small ? '0.6rem' : '0.875rem'
                      }} align='right'
                    >{row.montant}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: small ? '0.6rem' : '0.875rem'
                      }} align='right'
                    >{row.prise}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: small ? '0.6rem' : '0.875rem'
                      }} align='right'
                    >{row.reste}
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Disclaimer>
        Indemnités kilométriques : 0,45 € par kilomètre
      </Disclaimer>

    </>
  )
}

export default React.memo(PriceTable)

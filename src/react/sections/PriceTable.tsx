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
  montant: string,
  prise: string,
  reste: string
) {
  return { acte, montant, prise, reste }
}

const categories = [
  {
    title: 'Grossesse',
    data: [
      createData('Consultation', '25,00 €', '70%', '7,50 €'),
      createData('Entretien prénatal précoce', '42,00 €', '100%', '0,00 €'),
      createData('Bilan prénatal', '35,28 €', '100%', '0,00 €'),
      createData('Préparation à la Naissance 1 famille', '33,60 €', '100%', '0,00 €'),
      createData('Préparation à la Naissance 2-3 familles', '32,48 €', '100%', '0,00 €'),
      createData('Préparation à la Naissance 4-6 familles', '16,80 €', '100%', '0,00 €'),
      createData('Accompagnement à la parentalité (au delà des 7 premières séances), individuel', '35,00 €', '0%', '35,00 €'),
      createData('Accompagnement à la parentalité (au delà des 7 premières séances), en groupe', '20,00 €', '0%', '20,00 €'),
      createData('Accompagnement à la parentalité (au delà des 7 premières séances), à domicile', '40,00 €', '0%', '40,00 €'),
      createData('Atelier fratries (hors PNP)', '25,00 €', '0%', '25,00 €'),
      createData('Séance de Yoga Prénatal collectif, hors préparation à la naissance', '15,00 €', '0%', '15,00 €'),
      createData('Massage Garbhvati', '45,00 €', '0%', '45,00 €'),
      createData('Massage drainant pieds et jambes', '35,00 €', '0%', '35,00 €'),
      createData('observation grossesse pathologique avec ERCF - grossesse unique', '43,68 €', '100%', '0,00 €'),
      createData('observation grossesse pathologique avec ERCF - grossesse multiple', '63,28 €', '100%', '0,00 €'),
      createData('ERCF sans prescription grossesse unique', '35,00 €', '100%', '0,00 €'),
      createData('ERCF sans prescription grossesse multiple', '54,60 €', '100%', '0,00 €'),
      createData('Injection Rhophylac', '10,90 €', '100%', '0,00 €')
    ]
  },

  {
    title: 'Gynécologie',
    data: [
      createData('Consultation', '25,00 €', '70%', '7,50 €'),
      createData('première consultation de contraception et de prévention pour les jeunes filles de 15 à 17 ans inclus', '46,00 €', '100%', '0,00 €'),
      createData('Suivi de rééducation périnéale', '21 €', '70%', '6,30 €'),
      createData('Frottis cervicol-vaginal', '12,46 €', '70%', '3,74 €'),
      createData('Pose d’implant pharmacologique sous-cutané', '17,99 €', '70%', '5,40 €'),
      createData('Ablation ou changement d’implant sous-cutané', '41,80 €', '70%', '12,54 €'),
      createData('Pose d’un Dispositif Intra-Utérin', '38,40 €', '70%', '11,52 €'),
      createData('Changement d’un Dispositif Intra-Utérin', '38,40 €', '70%', '11,52 €'),
      createData('Ablation d’un dispositif intra-utérin par un matériel intra-utérin de préhension, par voie vaginale', '62,72 €', '70%', '18,82 €'),
    ]
  },
  {
    title: 'Visite à Domicile',
    data: [

      createData('visite à domicile', '29,00 €', '70%', '8,70 €'),
      createData('Observation et traitement à domicile d’une grossesse nécessitant, sur prescription du médecin, une surveillance intensive', '29,20 €', '100%', '0,00 €'),
      createData('Surveillance à domicile mère-enfant de J2 à J12, les deux premières fois, un seul enfant', '50,20 €', '100%', '0,00 €'),
      createData('Surveillance à domicile mère-enfant de J2 à J12, vistes suivantes, un seul enfant', '37,60 €', '100%', '0,00 €'),
      createData('Surveillance à domicile mère-enfant de J2 à J12, les deux premières fois, naissance multiple', '68,40 €', '100%', '0,00 €'),
      createData('Surveillance à domicile mère-enfant de J2 à J12, vistes suivantes, naissance multiple', '51,60 €', '100%', '0,00 €'),
      createData('Ablation d’agrafes/pansement césarienne', '12,72 €', '100%', '0,00 €'),
      createData('Supplément domicile pour les massages et le Yoga', '10,00 €', '0%', '10,00 €')
    ]
  },
  {
    title: 'Majorations',
    data: [

      createData('Majoration sortie précoce', '25,00 €', '100%', '0,00 €'),
      createData('Majoration dimanche et jour férié', '21,00 €', '100%', '0,00 €'),
      createData('Majoration de nuit de 20 h à 0 h et de 6 h à 8 h', '35,00 €', '100%', '0,00 €'),
      createData('Majoration de nuit de 0 h à 6 h', '40,00 €', '100%', '0,00 €'),
      createData('Majoration pour soins d’urgence faits au cabinet après examen en urgence d’un patient', '26,88 €', '70%', '8,06 €'),
      createData('Majoration déplacement en zone éloignée du cabinet, à la demande de la patiente', '30,00 €', '0', '30,00 €'),
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

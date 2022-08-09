import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme:Theme) => ({
  table: {
    textAlign: 'center',
    backgroundColor: 'white',
    color: theme.sfBlack,
    width: '100%',
    borderCollapse: 'collapse',
    '& thead': {
      color: 'white',
      backgroundColor: theme.medicalBlue,
      '& th': {
        border: 'none',
        padding: 10,
        fontSize: 14,
        textTransform: 'uppercase'
      }
    },
    '& tbody tr': {
      marginBottom: 10,
      '& td': {
        border: 'none',
        padding: 15,
        fontSize: '14px',
        background: 'white',
        borderBottom: '2px solid #f8f9fd'
      },
      '&:nth-child(odd) td': {
        backgroundColor: '#f4f6fc',
        borderBottom: '2px solid #eceffa'
      }
    }
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  }
}))

function AbsenceTable () {
  const classes = useStyles()

  const indispo: ReactNode[] = [
    'Nuit du 13 au 14 Aout',
    'Nuit du 27 au 28 Aout',
    'Nuit du 31 Aout au 1er Septembre'
  ]

  return (
    <div className={classes.wrapper}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Indisponibilités</th>
          </tr>
        </thead>
        <tbody>
          {indispo.length === 0 && (
            <tr>
              <td>Aucune de prévue</td>
            </tr>
          )}
          {indispo.length > 0 && (
            indispo.map((line, idx) => (
              <tr key={idx}>
                <td>{line}</td>
              </tr>
            ))
          )}

        </tbody>
      </table>
    </div>
  )
}

export default React.memo(AbsenceTable)

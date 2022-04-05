import React from 'react'
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
        padding: 30,
        fontSize: 14,
        textTransform: 'uppercase'
      }
    },
    '& tbody tr': {
      marginBottom: 10
    },
    '& tbody td': {
      border: 'none',
      padding: '30px',
      fontSize: '14px',
      background: 'white',
      borderBottom: '2px solid #f8f9fd',
      '&:nth-child(odd)': {
        backgroundColor: '#f4f6fc',
        borderBottom: '2px solid #eceffa'
      }
    }
  },
  wrapper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  }
}))

function NumbersTable () {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>SAMU</th>
            <th>numéro européen</th>
            <th>centre anti-poison</th>
            <th>police</th>
            <th>femmes victimes de violences</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15</td>
            <td>112</td>
            <td>05 61 77 74 47</td>
            <td>17</td>
            <td>3919</td>
          </tr>
        </tbody>
      </table>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>urgences sociales</th>
            <th>pharmacie de garde - montpellier</th>
            <th>urgences pédiatriques chu-montpellier</th>
            <th>urgences gynécologiques et obstétricales chu montpellier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>115</td>
            <td>32 37</td>
            <td>04 67 33 81 74<br />04 67 33 81 75</td>
            <td>04 67 33 55 34</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(NumbersTable)

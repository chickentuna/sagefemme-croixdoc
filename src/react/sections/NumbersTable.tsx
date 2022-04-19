import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { createRoutesFromChildren } from 'react-router-dom'
import { theme, Theme } from '../theme'
import useWindowDimensions from '../utils/useWindowDimensions'

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
        padding: 15,
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
    },
  },
  wrapper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
    '&.mini tbody td': {
      padding: 10
    },
    '&.mini thead th': {
      padding: 10,
      fontSize: 12
    }
  }
}))

const sections = [
  [
    { title: 'SAMU', num: '15' },
    { title: 'NUMÉRO EUROPÉEN', num: '112' },
    { title: 'CENTRE ANTI-POISON', num: '05 61 77 74 47' },
    { title: 'POLICE', num: '17' },
    { title: 'FEMMES VICTIMES DE VIOLENCES', num: '3919' },
  ],
  [
    { title: 'URGENCES SOCIALES', num: '115' },
    { title: 'PHARMACIE DE GARDE - MONTPELLIER', num: '32 37' },
    { title: 'URGENCES PÉDIATRIQUES CHU‑MONTPELLIER', num: '04 67 33 81 74\n04 67 33 81 75' },
    { title: 'URGENCES GYNÉCOLOGIQUES ET OBSTÉTRICALES CHU‑MONTPELLIER', num: '04 67 33 55 34' }
  ]
]

const mobileSections = sections.flat().map(v => [v])

function NumbersTable () {
  const classes = useStyles()
  const { width } = useWindowDimensions()
  const mobile = width < theme.verticalModeThreshold
  const tables = mobile ? mobileSections : sections

  return (
    <div className={classNames(classes.wrapper, { mini: mobile })}>
      {tables.map((elements, idx) => (
        <table key={idx} className={classes.table}>
          <thead>
            <tr>
              {elements.map((e, idx) => (
                <th key={idx}>{e.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {elements.map((e, idx) => (
                <td key={idx}>{e.num}</td>
              ))}
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
}

export default React.memo(NumbersTable)

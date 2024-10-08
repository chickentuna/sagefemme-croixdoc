import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
  grid: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    '& td': {
      padding: [2, 20],
      whiteSpace: 'nowrap',
      lineHeight: '24px',
      fontSize: 14
    }
  }
}))

export function Timetable () {
  const classes = useStyles()
  return (
    <div className={classes.grid}>
      <table>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>7h30 - 17h30</td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td>14h - 20h</td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td>10h - 18h</td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td>9h - 18h</td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td>10h - 17h</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

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
            <td>7h30 - 16h00</td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td>9h - 21h30</td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td>9h30 - 17h30</td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td>9h30 - 15h45</td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td>8h - 17h</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

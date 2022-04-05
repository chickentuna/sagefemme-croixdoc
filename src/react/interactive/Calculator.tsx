import { Button, FormLabel, TextField, TextFieldProps } from '@mui/material'
import { addWeeks, formatISO, isAfter, parseISO } from 'date-fns'
import React, { ChangeEvent, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Confetti from 'react-confetti'
import { theme } from '../theme'

const useStyles = createUseStyles({
  container: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  result: {
    marginTop: 10,
    color: theme.sfBlack,
    textAlign: 'center'
  }
})

const SFDateField = (props: TextFieldProps) => (
  <>
    <TextField
      type='date'
      label=' '
      InputLabelProps={{ shrink: false }}
      margin='normal'
      fullWidth
      variant='outlined'
      {...props}
    />
  </>
)

const TOTAL_SA = 39
const TERME_SA = 4

function Calculator () {
  const [date1, setDate1] = useState<Date|null>(null)
  const [date2, setDate2] = useState<Date|null>(null)
  const [result, setResult] = useState<boolean|null>(null)
  const [now, setNow] = useState(Date.now())

  const date1InPast = date1 == null ? false : isAfter(now, date1)
  const valid = date1 != null && date2 != null && !date1InPast && date2 != null

  function confetti () {

  }

  function format (date:Date|null): string {
    return date == null
      ? ''
      : formatISO(date, {
        representation: 'date'
      })
  }

  function handleSetDate1 (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    handleSetDate(e, setDate1, setDate2, -TOTAL_SA)
  }
  function handleSetDate2 (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    handleSetDate(e, setDate2, setDate1, +TOTAL_SA)
  }

  function handleSetDate (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, setDate: (date:Date|null)=>void, setOtherDate: (date:Date|null)=>void, offset: number): void {
    let value = e.target.value == null ? null : parseISO(e.target.value)
    if (value != null && isNaN(value.getTime())) {
      value = null
    }
    setDate(value)
    setOtherDate(value == null ? null : addWeeks(value, offset))
    setResult(null)
  }

  function handleSubmit (e: React.FormEvent) {
    e.preventDefault()
    const newNow = Date.now()
    const newResult = isAfter(newNow, addWeeks(date1 as Date, -TERME_SA))
    if (!result && newResult) {
      confetti()
    }
    setNow(newNow)
    setResult(newResult)
  }

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          Entrez la date prévue d’accouchement&nbsp;:
        </FormLabel>
        <SFDateField
          value={format(date1)}
          onChange={handleSetDate1}
          error={date1InPast}
          helperText={date1InPast ? 'Date ne doit pas être dans le passé' : null}
        />
        <FormLabel>
          Ou la date de début de grossesse&nbsp;:
        </FormLabel>
        <SFDateField
          value={format(date2)}
          onChange={handleSetDate2}
        />

        <Button disabled={!valid} type='submit' variant='contained'>
          OK
        </Button>
      </form>
      {
        result != null && (result
          ? <div className={classes.result}>Oui, je suis à terme.</div>
          : <div className={classes.result}>Non, je ne suis pas encore à terme. En cas de contractions anormales, rendez-vous directement aux urgences afin d’être vue par un médecin.</div>)
      }
      <Confetti width={585} height={500} numberOfPieces={result != null && result ? 180 : 0} />
    </div>
  )
}

export default React.memo(Calculator)

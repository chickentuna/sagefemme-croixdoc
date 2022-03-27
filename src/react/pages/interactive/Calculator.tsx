import DatePicker from '@mui/lab/DatePicker'
import { Box, Button, FormControl, FormControlLabel, FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import PageWrapper from '../../components/PageWrapper'

const useStyles = createUseStyles({
  container: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
  }
})

const SFTextField = ({ label }: { label: string }) => (
  <TextField
    fullWidth
    label={label}
    variant='outlined'
  />
)

function Calculator () {
  const [value, setValue] = useState(null)
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <FormControl>
        <FormLabel>
          Entrez la date prévue d’accouchement&nbsp;:
        </FormLabel>
        <DatePicker
          renderInput={(props) => <TextField hiddenLabel fullWidth variant='outlined' {...props} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
        />
        <FormLabel>
          Ou la date de début de grossesse&nbsp;:
        </FormLabel>
        <DatePicker
          renderInput={(props) => <TextField hiddenLabel fullWidth variant='outlined' {...props} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
        />
      </FormControl>

      <Button variant='contained'>
        Go
      </Button>

      <p>Oui, je suis à terme. (ajouter des confettis :)</p>

      <p>Non, je ne suis pas encore à terme. En cas de contractions anormales, rendez-vous directement aux urgences afin d’être vue par un médecin.</p>
    </div>
  )
}

export default Calculator

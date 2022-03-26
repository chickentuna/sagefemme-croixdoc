import { FormControl, FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import PageWrapper from '../../components/PageWrapper'

const SFTextField = ({ label }: { label: string }) => (
  <DateTimePicker
    renderInput={(props) => <TextField {...props} />}
    label={label}
    value={value}
    onChange={(newValue) => {
      setValue(newValue)
    }}
  />
)

function Calculator () {
  return (
    <PageWrapper title='Suis-je à terme&nbsp;?'>

      <FormControl>

        <SFTextField
          label='Entrez la date prévue d’accouchement&nbsp;:'
        />
        <SFTextField
          label='Ou la date de début de grossesse&nbsp;:'
        />
      </FormControl>

      Go

      Oui, je suis à terme. (ajouter des confettis :)

      ou

      Non, je ne suis pas encore à terme. En cas de contractions anormales, rendez-vous directement aux urgences afin d’être vue par un médecin.

    </PageWrapper>
  )
}

export default Calculator

import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'

const useStyles = createUseStyles({
  title: {
    color: 'white',
    fontSize: '34px',
    marginTop: 0
  },
  content: {
    fontSize: 20,
    maxWidth: '47%',
    minWidth: 500
  },
  list: {
    color: 'white',
    marginTop: 10
  }
})

function Gyneco() {
  const classes = useStyles()
  return (
    <PageWrapper style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55)), url(\'gyneco.jpg\')',
      backgroundPosition: '100% 25%',
      alignItems: 'flex-end'
    }}>
      <div className={classes.content}>

        <h1 className={classes.title}>Gynécologie</h1>
        <div className={classes.list} >
          <List items={[
            'Suivi gynécologique de prévention',
            'Réalisation et interprétation de frottis cervico-vaginaux',
            'Contraception naturelle ou médicalisée',
            'Poses et ablations DIU, implants contraceptifs, diaphragme contraceptif',
            'Consultation pré-conceptionnelle',
            'Bilan périnéal et rééducation périnéale pour les femmes de tout âge',
            'Consultation anonyme et gratuite de l’adolescente de 15 à 17 ans inclus',
            'Vaccination des jeunes filles à partir de 11 ans',
          ]} />
        </div>
      </div>
    </PageWrapper>
  )
}


export default React.memo(Gyneco)
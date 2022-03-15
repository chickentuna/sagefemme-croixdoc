import React from 'react'
import { createUseStyles } from 'react-jss'
import PageWrapper from '../components/PageWrapper'

const useStyles = createUseStyles({
  wrapper: {

  },
  title: {
    color: 'white'
  },
  list: {
    color: 'white'
  },
  content: {
      
  }
})

function Gyneco() {
  const classes = useStyles()
  return (
    <PageWrapper style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.15)), url(\'gyneco.jpg\')',
      backgroundPosition: '100% 25%',
    }}>
      <div className={classes.content}>

        <h1 className={classes.title}>Gynécologie</h1>
        <ul className={classes.list} >
          <li>Suivi gynécologique de prévention</li>
          <li>Réalisation et interprétation de frottis cervico-vaginaux</li>
          <li>Contraception naturelle ou médicalisée</li>
          <li>Poses et ablations DIU, implants contraceptifs, diaphragme contraceptif</li>
          <li>Consultation pré-conceptionnelle</li>
          <li>Bilan périnéal et rééducation périnéale pour les femmes de tout âge</li>
          <li>Consultation anonyme et gratuite de l’adolescente de 15 à 17 ans inclus</li>
          <li>Vaccination des jeunes filles à partir de 11 ans</li>
        </ul>
      </div>
    </PageWrapper>
  )
}


export default React.memo(Gyneco)
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
    maxWidth: '95.1%',
    minWidth: 500,
    display: 'flex'
  },
  list: {
    color: 'white',
    marginTop: 10
  },
  imageBlock: {
    flex: 1,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function Gyneco () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Gynécologie'
    >
      <div className={classes.content}>

        <div className={classes.imageBlock}>
          <img src='gyneco.jpg' />
        </div>
        <div className={classes.list}>
          <List items={[
            'Suivi gynécologique de prévention',
            'Réalisation et interprétation de frottis cervico-vaginaux',
            'Contraception naturelle ou médicalisée',
            'Poses et ablations DIU, implants contraceptifs, diaphragme contraceptif',
            'Consultation pré-conceptionnelle',
            'Bilan périnéal et rééducation périnéale pour les femmes de tout âge',
            'Consultation anonyme et gratuite de l’adolescente de 15 à 17 ans inclus',
            'Vaccination des jeunes filles à partir de 11 ans'
          ]}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Gyneco)

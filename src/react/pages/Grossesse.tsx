import React from 'react'
import { createUseStyles } from 'react-jss'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'

const useStyles = createUseStyles({
  title: {
    color: 'black',
    fontSize: '34px',
    marginTop: 0
  },
  content: {
    fontSize: 20,
    maxWidth: '87%',
    minWidth: 500,
    display: 'flex'
  },
  list: {
    color: 'black',
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

function Grossesse () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Grossesse et post-partum'
    >
      <div className={classes.content}>

        <div className={classes.imageBlock}>
          <img src='bebe.jpg' />
        </div>

        <div className={classes.list}>
          <List items={[
            'Consultation pré-conceptionnelle',
            'Suivi de grossesse physiologique - suivi semi-global',
            'Bilan prénatal',
            'Entretien prénatal précoce (en début de grossesse)',
            'Préparation à la Naissance et à la Parentalité',
            'Monitoring',
            'Surveillance à domicile d’une grossesse à risque, sur prescription',
            'Observation grossesse pathologique avec monitoring, sur prescription',
            'Diagnostic de début de travail, diagnostic de rupture de la poche des eaux',
            'Visite à domicile - retour de maternité',
            'Accompagnement sortie précoce',
            'Consultation du nouveau-né',
            'Surveillance de la bilirubinémie (ictère), pesées de contrôle',
            'Accompagnement et soutien de l’allaitement maternel',
            'Consultation post-natale (6-8 semaines après l’accouchement)',
            'Rééducation périnéale',
            'Vaccinations de la femme enceinte et de son entourage'
          ]}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Grossesse)

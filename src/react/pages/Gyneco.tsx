import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import PageWrapper from '../components/PageWrapper'

const useStyles = createUseStyles({
  title: {
    color: 'white',
    fontSize: '34px'
  },
  list: {
    color: 'white',
    marginTop: 10
  },
  content: {
    fontSize: 20,
    maxWidth: '50%',
    minWidth: 500
  },
  listItem: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    marginTop: 10,
    padding: [0, 40]
  },
  listIcon: {
    fontSize: 12,
    paddingTop: 7,
    margin: [0, 10]
  },
  listText: {
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
          <div className={classes.listItem}>
            <div className={classNames(['icon-leaf',classes.listIcon])}></div>
            <div className={classes.listText}>
            Suivi gynécologique de prévention
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classNames(['icon-leaf',classes.listIcon])}></div>
            <div className={classes.listText}>
            Réalisation et interprétation de frottis cervico-vaginaux
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classNames(['icon-leaf',classes.listIcon])}></div>
            <div className={classes.listText}>
            Contraception naturelle ou médicalisée
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classNames(['icon-leaf',classes.listIcon])}></div>
            <div className={classes.listText}>
            Poses et ablations DIU, implants contraceptifs, diaphragme contraceptif
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classNames(['icon-leaf',classes.listIcon])}></div>
            <div className={classes.listText}>
            Consultation pré-conceptionnelle
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classNames(['icon-leaf',classes.listIcon])}></div>
            <div className={classes.listText}>
            Bilan périnéal et rééducation périnéale pour les femmes de tout âge
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classNames(['icon-leaf',classes.listIcon])}></div>
            <div className={classes.listText}>
            Consultation anonyme et gratuite de l’adolescente de 15 à 17 ans inclus
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classNames(['icon-leaf',classes.listIcon])}></div>
            <div className={classes.listText}>
            Vaccination des jeunes filles à partir de 11 ans
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}


export default React.memo(Gyneco)
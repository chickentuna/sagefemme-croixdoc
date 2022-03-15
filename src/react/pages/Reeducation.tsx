import classNames from 'classnames'
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
    maxWidth: '47%',
    minWidth: 500
  },
  list: {
    color: 'black',
    marginTop: 10
  }
})

function Reeducation() {
  const classes = useStyles()
  return (
    <PageWrapper style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(\'reeducation.jpg\')',
      backgroundPosition: '100% 50%',
      alignItems: 'flex-end'
    }}>
      <div className={classes.content}>

        <h1 className={classes.title}>Rééducation périnéale</h1>
        <div className={classes.list} >
          <p>
            Pas d’ordonnance nécessaire, dans la limite de (30 ?) séances<br />
            Pour les femmes de tout âge, en post-partum ou non<br />
            <br />
            Première consultation = bilan périnéal<br />
            <br />
            Méthodes de rééducation, adaptées selon le bilan périnéal&nbsp;:<br />
            rééducation manuelle<br />
            électrostimulation<br />
            pas de biofeedback par conviction personnelle<br />
            <br />
            Les premières séances se font “sur table” afin d’intégrer la connaissance et conscience du périnée et d’apprendre les exercices de rééducation périnéale. Une fois ces exercices et mouvements maîtrisés, la suite de la rééducation se fait sur tapis et/ou sur ballon, éventuellement couplés à des exercices de Yoga post-natal, afin d’apprendre à les intégrer dans la vie quotidienne.
          </p>
        </div>
      </div>
    </PageWrapper>
  )
}


export default React.memo(Reeducation)
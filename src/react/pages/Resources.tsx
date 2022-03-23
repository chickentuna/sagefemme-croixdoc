
import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  blocks: {
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  },

}))

function Resources () {
  const classes = useStyles()
  return (
    <>
      <PageWrapper
        title='Ressources'
      >
        <div className={classes.content}>
          Valises pour la maternité

          Matériel et fournitures de puériculture

          Démarches administratives et RDVs en post-partum

          Préparation fratries : coloriage à imprimer

          Préparation fratries : Histoire audio (format mp3)

          Coordonnées utiles et numéros verts
        </div>
      </PageWrapper>

    </>
  )
}

export default React.memo(Resources)


import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

  const files = [{
    text: 'Valises pour la maternité'
  },
  { text: 'Démarches administratives et RDVs en post-partum' },
  { text: 'Préparation fratries : coloriage à imprimer' },
  { text: 'Préparation fratries : Histoire audio (format mp3)' },
  { text: 'Coordonnées utiles et numéros verts' }
  ]

  return (
    <>
      <PageWrapper
        title='Ressources'
      >
        <div className={classes.content}>
          {files.map(file => (
            <p key={file.text}>
              <a> <FontAwesomeIcon icon={faDownload} /></a>
            </p>
          ))}
        </div>
      </PageWrapper>

    </>
  )
}

export default React.memo(Resources)

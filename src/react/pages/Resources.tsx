
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ContentBlock from '../components/ContentBlock'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import { waifu } from '../utils/placeholder'

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
    text: 'Valises pour la maternité',
    url: waifu()
  },
  {
    text: 'Démarches administratives et RDVs en post-partum',
    url: '/'
  },
  {
    text: 'Préparation fratries : coloriage à imprimer',
    url: '/'
  },
  {
    text: 'Préparation fratries : Histoire audio (format mp3)',
    url: '/'
  },
  {
    text: 'Coordonnées utiles et numéros verts',
    url: '/'
  }
  ]

  return (
    <>
      <PageWrapper
        title='Ressources'
      >
        <div className={classes.content}>
          {files.map(file => (
            <p key={file.text}>
              <Link to={file.url} download> {file.text} <FontAwesomeIcon icon={faDownload} /></Link>
            </p>
          ))}
        </div>
      </PageWrapper>

    </>
  )
}

export default React.memo(Resources)

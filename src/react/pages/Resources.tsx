
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090,
    '& p': {
      marginBottom: 0
    },
  },
  download: {
    marginBottom: 15
  },
  link: {
    fontSize: 18,
    '&$visited:hover': {
      opacity: 0.65,
      color: 'purple'
    }
  },
  visited: {
    color: 'purple'
  }
}))

function Resources () {
  const classes = useStyles()
  const [visited, setvisited] = useState(new Set())

  const files = [{
    text: 'Valises pour la maternité',
    url: 'docs/Valises pour la maternité.pdf'
  },
  {
    text: 'Démarches administratives et RDVs en post-partum',
    url: 'docs/Rendez-vous à prévoir en post-partum.pdf'
  },
  {
    text: 'Préparation fratries : coloriage à imprimer',
    url: 'docs/Fratrie coloriage.png'
  },
  {
    text: 'Préparation fratries : Histoire audio',
    url: 'docs/histoire fratrie.mp3'
  },
  {
    text: 'Coordonnées utiles et numéros verts',
    url: 'docs/Coordonnées utiles et numéros verts.pdf'
  }
  ]

  function handleClick (idx:number):void {
    if (!visited.has(idx)) {
      const newVisited = new Set(visited)
      newVisited.add(idx)
      setvisited(newVisited)
    }
  }

  return (
    <>
      <PageWrapper
        title='Documents Utiles'
      >
        <ContentBlock
          imageUrl='images/docs.jpg'
          landscape
          flip
        >

          <div className={classes.content}>
            {files.map((file, idx) => (
              <div className={classes.download} key={file.text}>
                <p>
                  {file.text}
                </p>
                <a
                  className={classNames([classes.link, { [classes.visited]: visited.has(idx) }])}
                  href={file.url}
                  download
                  onClick={() => handleClick(idx)}
                > <FontAwesomeIcon icon={faDownload} /> {file.url}
                </a>
              </div>
            ))}
          </div>
        </ContentBlock>
      </PageWrapper>

    </>
  )
}

export default React.memo(Resources)

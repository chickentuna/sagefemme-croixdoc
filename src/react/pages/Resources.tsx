
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ContentBlock from '../components/ContentBlock'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import { waifu, husbando } from '../utils/placeholder'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  link: {
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
    url: 'images/background.jpg'
  },
  {
    text: 'Démarches administratives et RDVs en post-partum',
    url: 'images/background.jpg'
  },
  {
    text: 'Préparation fratries : coloriage à imprimer',
    url: 'images/background.jpg'
  },
  {
    text: 'Préparation fratries : Histoire audio (format mp3)',
    url: 'images/background.jpg'
  },
  {
    text: 'Coordonnées utiles et numéros verts',
    url: 'images/background.jpg'
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
          imageUrl={husbando()}
          flip
        >

          <div className={classes.content}>
            {files.map((file, idx) => (
              <p key={file.text}>
                <a
                  className={classNames([classes.link, { [classes.visited]: visited.has(idx) }])}
                  href={file.url}
                  download
                  onClick={() => handleClick(idx)}
                > <FontAwesomeIcon icon={faDownload} /> {file.text}
                </a>
              </p>
            ))}
          </div>
        </ContentBlock>
      </PageWrapper>

    </>
  )
}

export default React.memo(Resources)

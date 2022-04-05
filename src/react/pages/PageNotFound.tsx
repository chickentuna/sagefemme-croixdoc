import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    width: '100%',
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      maxWidth: '100%',
      cursor: 'pointer'
    }
  },
  message: {
    fontSize: 18,
    maxWidth: 560,
    marginTop: 25,
    marginBottom: 60
  }
})

function PageNotFound () {
  const classes = useStyles()
  // const [bunny, setBunny] = useState('images/bunny.png')
  // const [bunnyIdx, setBunnyIdx] = useState(0)

  // function handleClick () {
  //   setBunny(`https://loremflickr.com/450/300/rabbit,cute/all?q=${bunnyIdx}`)
  //   setBunnyIdx(bunnyIdx + 1)
  // }

  return (
    <>
      <div className={classes.content}>
        <h1>404</h1>
        <div className={classes.message}>
          La page que vous recherchez est introuvable. Il est possible que vous ayez mal saisi l'adresse, ou que la page n'existe plus.
          Veuillez vérifier votre orthographe et réessayer.
        </div>
        <img src='images/bunny.png' />
      </div>
    </>
  )
}

export default React.memo(PageNotFound)

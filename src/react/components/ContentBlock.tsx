import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    '@media (max-width: 992px)': {
      flexDirection: 'column'
    }
  },
  textBlock: {
    flex: 0.6
  },
  imageBlock: {
    flex: 0.4,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    padding: 20,
    position: 'relative',
    width: '100%',
    maxWidth: 320
  },
  rect: {
    position: 'absolute'
  },
  rectA: {
    zIndex: 0,
    backgroundColor: '#fbadb0',
    top: 0,
    left: 0,
    height: '50%',
    width: '50%'
  },
  rectB: {
    zIndex: 1,
    backgroundColor: '#adcce9',
    top: '30%',
    left: '50%',
    height: '70%',
    width: '50%'
  },
  image: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

interface ContentBlockProps {
  imageUrl: string
  children: ReactNode
}

function ContentBlock ({ imageUrl, children }: ContentBlockProps) {
  const classes = useStyles()
  return (
    <div className={classes.container}>

      <div
        className={classes.imageBlock}
      >
        <div className={classes.imageWrapper}>
          <div className={classNames(classes.rect, classes.rectA)}></div>
          <div className={classNames(classes.rect, classes.rectB)}></div>
          <img src={imageUrl} className={classes.image} />
        </div>
      </div>

      <div className={classes.textBlock}>
        {children}
      </div>
    </div>
  )
}

export default React.memo(ContentBlock)

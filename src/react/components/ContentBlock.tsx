import classNames from 'classnames'
import { relative } from 'node:path/win32'
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    gap: 30,
    '@media (max-width: 992px)': {
      flexDirection: 'column',

      '&$landscape': {
        '& $imageBlock': {
          width: '100%',
          maxWidth: 500
        },
        '& $textBlock': {
          maxWidth: 'none'
        }
      },
      '& $imageBlock': {
        width: '100%',
        maxWidth: 450
      },
      '& $textBlock': {
        maxWidth: 'none'
      },
      '&$flip': {
        flexDirection: 'column'
      }
    }
  },
  landscape: {
    '& $imageBlock': {
      maxWidth: 500
    },
    '& $textBlock': {
      maxWidth: 'calc(100% - 500px)'
    }
  },
  flip: {
    flexDirection: 'row-reverse'
  },
  textBlock: {
    maxWidth: 'calc(100% - 320px)'
  },
  imageBlock: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: 20,
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
  flip?: boolean
  landscape?: boolean
}

function ContentBlock ({ imageUrl, children, flip = false, landscape = false }: ContentBlockProps) {
  const classes = useStyles()

  return (
    <div className={classNames([classes.container, { [classes.landscape]: landscape, [classes.flip]: flip }])}>
      <div className={classes.textBlock}>
        {children}
      </div>
      <div
        className={classes.imageBlock}
      >
        <div className={classNames(classes.rect, classes.rectA)}></div>
        <div className={classNames(classes.rect, classes.rectB)}></div>
        <img src={imageUrl} className={classes.image} />
      </div>
    </div>
  )
}

export default React.memo(ContentBlock)

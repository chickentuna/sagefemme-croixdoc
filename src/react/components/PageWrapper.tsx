import React, { HTMLProps, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  wrapper: {
    flex: '1 1 auto',
    padding: [50, 30],
    backgroundImage: 'linear-gradient(lightblue, white)',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: 'white',
    margin: [0, 0, 40, 0]
  }
})

interface PageWrapperProps extends Omit<HTMLProps<Element>, 'title'> {
  title?: ReactNode
}

function PageWrapper({children, style, title}:PageWrapperProps) {
  const classes = useStyle()

  return (
    <div className={classes.wrapper} style={style}>
      {title != null && (
        <h1 className={classes.title}>{title}</h1>
      )}
      {children}
    </div>
  )
}

export default React.memo(PageWrapper)
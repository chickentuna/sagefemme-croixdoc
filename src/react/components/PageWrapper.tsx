import React, { HTMLProps, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

const useStyle = createUseStyles({
  wrapper: {
    flex: '1 1 auto',
    padding: [20, 30, 50, 30],
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.15)), url(\'background.jpg\')',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: theme.medicalBlue,
    margin: [0, 0, 40, 0],
    fontSize: '32px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '20px',
    paddingBottom: '20px',
    position: 'relative'
  },
  titleContainer: {
    color: '#555555',
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    paddingTop: '30px',
    paddingBottom: '22px',
    marginBottom: '30px',
    borderTop: '4px solid #4867d6',
    width: '100%',
    maxWidth: 1390
  }
})

interface PageWrapperProps extends Omit<HTMLProps<Element>, 'title'> {
  title?: ReactNode
}

function PageWrapper ({ children, style, title }:PageWrapperProps) {
  const classes = useStyle()

  return (
    <div className={classes.wrapper} style={style}>
      {title != null && (
      // <h3 className={classes.title}>{title}</h3>

        <div className={classes.titleContainer}>
          <h3>{title}</h3>
        </div>

      )}
      {children}
    </div>
  )
}

export default React.memo(PageWrapper)

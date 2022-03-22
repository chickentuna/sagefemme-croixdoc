import React, { HTMLProps, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

const useStyle = createUseStyles({
  wrapper: {
    flex: '1 1 auto',
    padding: [20, 30, 50, 30],
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
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
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'center',
    background: '#adcce9',
    paddingTop: '30px',
    paddingBottom: '22px',
    marginBottom: '30px',
    borderTop: '4px solid #4867d6',
    width: '100%',
    maxWidth: 1390,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }
})

interface PageWrapperProps extends Omit<HTMLProps<Element>, 'title'> {
  title?: ReactNode
  titleDecorationUrl?: string
  titleColor?: string
}

function PageWrapper ({ children, style, title, titleDecorationUrl, titleColor }:PageWrapperProps) {
  const classes = useStyle()

  return (
    <div
      className={classes.wrapper}
      style={style}
    >
      {title != null && (
        <div
          className={classes.titleContainer}
          style={{
            backgroundColor: titleColor,
            backgroundImage: titleDecorationUrl != null ? `url(${titleDecorationUrl})` : undefined,
            borderColor: titleDecorationUrl != null ? theme.sfBlack : undefined,
          }}
        >
          {titleDecorationUrl != null}
          <h3>{title}</h3>
        </div>
      )}
      {children}
    </div>
  )
}

export default React.memo(PageWrapper)

import classNames from 'classnames'
import React, { HTMLProps, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import './ButtonLink.scss'

const useStyle = createUseStyles({
  wrapper: {
    flex: '1 1 auto',
    padding: [80, 30],
    backgroundImage: 'linear-gradient(lightblue, white)',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

interface PageWrapperProps extends HTMLProps<Element> {
  children?: ReactNode
}

function PageWrapper({children, style}: HTMLProps<Element>) {
  const {wrapper} = useStyle()

  return (
    <div className={wrapper} style={style}>
      {children}
    </div>
  )
}

export default React.memo(PageWrapper)
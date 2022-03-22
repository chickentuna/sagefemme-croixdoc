import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  disclaimer: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center'
  },
})

interface Props {
  children?: ReactNode
}

export default function Disclaimer ({ children }: Props) {
  const { disclaimer } = useStyles()
  return (
    <div className={disclaimer}>
      {children}
    </div>
  )
}

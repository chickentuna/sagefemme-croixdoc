import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './ButtonLink.scss'


interface ButtonLinkProps {
  to: string
  children?: ReactNode
  alert?: boolean
  mini?: boolean
}

export default function ButtonLink({to, children, alert = false, mini = false}: ButtonLinkProps) {
  return (
    <Link className={classNames(['button-39', {alert, mini}])} to={to}>
      {children}
    </Link>
  )
}
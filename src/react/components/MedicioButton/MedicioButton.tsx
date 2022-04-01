import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './MedicioButton.scss'

interface MedicioButtonProps {
  to?: string
  children?: ReactNode,
  fontSize?: number
}

function MedicioButton ({ to, children, fontSize = 18 }: MedicioButtonProps) {
  if (to == null) {
    return (
      <button className='medicio-button' style={{ fontSize: fontSize }}>
        {children}
      </button>
    )
  } else {
    return (
      <Link to={to} className='medicio-button' style={{ fontSize: fontSize }}>
        {children}
      </Link>
    )
  }
}

export default React.memo(MedicioButton)

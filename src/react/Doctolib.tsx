import React from 'react'

export function Doctolib () {
  return (
    <a
      href='https://www.doctolib.fr/sage-femme/restinclieres/fanchon-rivoire?utm_campaign=website-button&amp;utm_source=fanchon-rivoire-website-button&amp;utm_medium=referral&amp;utm_content=option-5&amp;utm_term=fanchon-rivoire'
      style={{
        display: 'block',
        textAlign: 'center',
        backgroundColor: '#0596DE',
        color: '#ffffff',
        fontSize: '14px',
        overflow: 'hidden',
        width: '257px',
        height: '40px',
        borderTopRightRadius: 'none',
        borderTopLeftRadius: 'none',
        position: 'fixed',
        top: '0',
        right: '5px',
        zIndex: 1000,
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        lineHeight: '40px'
      }}
      target='_blank'
      rel='noreferrer'
    >
      <span style={{ fontSize: '13px' }}>
        Prendre rendez-vous en ligne
      </span>
      <img
        style={{
          height: '15px',
          marginBottom: '3px',
          verticalAlign: 'middle',
          width: 'auto'
        }}
        src='https://pro.doctolib.fr/external_button/doctolib-white-transparent.png'
        alt='Doctolib'
      />
    </a>
  )
}

export default React.memo(Doctolib)

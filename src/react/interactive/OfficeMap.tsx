
import React from 'react'

function OfficeMap (props: React.IframeHTMLAttributes<HTMLIFrameElement>) {
  return (
    <>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.6109090450436!2d4.032967051200702!3d43.71863445611227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a0789533ec93%3A0x91e916c6a21393c9!2s2%20Rue%20Paul%20Valery%2C%2034160%20Restincli%C3%A8res!5e0!3m2!1sfr!2sfr!4v1649417287692!5m2!1sfr!2sfr'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        {...props}
      >
      </iframe>
    </>
  )
}

export default React.memo(OfficeMap)

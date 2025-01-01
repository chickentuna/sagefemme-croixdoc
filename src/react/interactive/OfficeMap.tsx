
import React from 'react'

function OfficeMap (props: React.IframeHTMLAttributes<HTMLIFrameElement>) {
  return (
    <>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2992059217954!2d4.0332150765577515!3d43.72511084777643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b41fd30568de5f%3A0x46e7203d392c561c!2s4%20Chem.%20du%20Thym%2C%2034160%20Restincli%C3%A8res!5e0!3m2!1sfr!2sfr!4v1735732134045!5m2!1sfr!2sfr'
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

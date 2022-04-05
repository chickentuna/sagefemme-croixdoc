
import React from 'react'

function OfficeMap (props: React.IframeHTMLAttributes<HTMLIFrameElement>) {
  return (
    <>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23066.914560153065!2d4.021766523835107!3d43.72375800704005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b41fd9e4827211%3A0x4078821166ac0e0!2s34160%20Restincli%C3%A8res!5e0!3m2!1sen!2sfr!4v1648390488260!5m2!1sen!2sfr'
        // width='600'
        // height='450'
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

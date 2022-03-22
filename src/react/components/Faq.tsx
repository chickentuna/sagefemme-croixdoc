import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

})

export interface FaqItem {
  label: ReactNode
  text: ReactNode
}

interface Props {
  title: ReactNode
  info?: ReactNode
  items: FaqItem[]
}

function Faq ({ title, info, items }: Props) {
  return (
    <section id='faq' className='faq section-bg'>
      <div className='container aos-init aos-animate' data-aos='fade-up'>

        <div className='section-title'>
          <h2>{title}</h2>
          {info != null && <p>{info}</p>}
        </div>

        <ul className='faq-list'>
          {items.map(({ label, text }, index) => (
            <li key={index}>
              <div data-bs-toggle='collapse' className='question collapsed' data-href={`#faq${index}`} aria-expanded='false'>
                {label}
                <i className='bi bi-chevron-down icon-show'></i>
                <i className='bi bi-chevron-up icon-close'></i>
              </div>
              <div id={`faq${index}`} className='collapse' data-bs-parent='.faq-list'>
                <p>
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default React.memo(Faq)

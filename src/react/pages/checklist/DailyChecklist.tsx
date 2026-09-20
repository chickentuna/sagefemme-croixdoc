import './DailyChecklist.scss'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

const ITEMS = [
  {
    key: 'kit',
    action: 'Compléter le kit de change',
    detail: 'Se référer à la liste affichée dans le panier.'
  },
  {
    key: 'sac',
    action: 'Reconstituer le sac de sortie',
    detail: 'Se référer à la fiche accrochée au sac.'
  },
  {
    key: 'allaitement',
    action: 'Laver le matériel d\'alimentation',
    detail: 'Biberons, tétines, tire-lait, téterelles — tout ce qui sert à nourrir bébé, prêt pour la prochaine fois.'
  },
  {
    key: 'linge-sale',
    action: 'Faire le tour de tous les paniers de linge sale de la maison',
    detail: 'Chambres des enfants, chambre parentale, salle de bain. Assez pour une machine → la lancer, heures creuses.'
  },
  {
    key: 'linge-propre',
    action: 'Ranger le linge propre en attente',
    detail: 'Sur l\'étendoir, au sèche-linge ou plié → terminer le circuit jusqu\'au placard.'
  },
  {
    key: 'debarrasser',
    action: 'Débarrasser la table et les plans de travail',
    detail: 'Rassembler toute la vaisselle sale de la maison dans l\'évier.'
  },
  {
    key: 'vaisselle',
    action: 'Vérifier l\'évier et le lave-vaisselle',
    detail: 'Sale → dedans ou à la main. Propre et fini → le vider.'
  },
  {
    key: 'poubelles',
    action: 'Vider les poubelles pleines',
    detail: 'Sac remis. Si c\'est le jour de collecte, sortir les poubelles.'
  },
  {
    key: 'pieces',
    action: 'Ramasser ce qui traîne dans les pièces de vie',
    detail: 'Jouets, vêtements, objets, déchets → à leur place ou à la poubelle.'
  },
  {
    key: 'sol',
    action: 'Passer un coup de balai ou d\'aspirateur dans le salon et la cuisine'
  }
]

const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Karla:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap'

function DailyChecklist () {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [pops, setPops] = useState<Record<string, number>>({})
  const [celebrate, setCelebrate] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = FONTS_URL
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  function toggle (key: string) {
    const willCheck = !checked[key]
    const next = { ...checked, [key]: willCheck }
    setChecked(next)

    if (willCheck) {
      setPops(prev => ({ ...prev, [key]: Date.now() }))
    }

    const nowDone = ITEMS.filter(item => next[item.key]).length
    setCelebrate(nowDone === ITEMS.length)
  }

  function clearPop (key: string) {
    setPops(prev => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const done = ITEMS.filter(item => checked[item.key]).length

  return (
    <div className='checklist-page'>
      <div className='checklist-card-page'>
        <header>
          <p className='eyebrow'>Niveau 1 — les indispensables</p>
          <h1>Checklist de survie pour parent fatigué</h1>
          <div className='rule-row'>
            <span className='count'>{done} / {ITEMS.length}</span>
            <div className='bar'>
              <div className='bar-fill' style={{ width: `${(done / ITEMS.length) * 100}%` }} />
            </div>
          </div>
          <p className='reset-note'>Recharger la page remet toutes les cases à zéro.</p>
        </header>

        <ol className='list'>
          {ITEMS.map((item, idx) => (
            <li
              key={item.key}
              className={classNames('item', { done: checked[item.key] })}
              onClick={() => toggle(item.key)}
            >
              <span className='num'>{String(idx + 1).padStart(2, '0')}</span>
              <span className='box'>
                <svg viewBox='0 0 16 16' fill='none'>
                  <path d='M3 8.5L6.2 11.5L13 4.5' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                {pops[item.key] != null && (
                  <span
                    key={pops[item.key]}
                    className='thumb-pop'
                    onAnimationEnd={() => clearPop(item.key)}
                  >👍
                  </span>
                )}
              </span>
              <span className='text-wrap'>
                <div className='action'>{item.action}</div>
                {item.detail != null && <div className='detail'>{item.detail}</div>}
              </span>
            </li>
          ))}
        </ol>

        <footer>
          <button className='print-btn' onClick={() => window.print()}>Imprimer</button>
        </footer>
      </div>

      {celebrate && (
        <div className='celebrate-overlay' onClick={() => setCelebrate(false)}>
          <div className='celebrate-thumb'>👍</div>
        </div>
      )}
    </div>
  )
}

export default DailyChecklist

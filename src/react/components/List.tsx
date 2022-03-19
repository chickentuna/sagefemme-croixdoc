import classNames from 'classnames'
import React, { HTMLProps, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  listItem: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingLeft: 40
  },
  listIcon: {
    fontSize: 12,
    paddingTop: 7,
    margin: [0, 10]
  }
})

interface ListProps {
  icon?: string
  items: ReactNode[]
}

function List ({ icon = 'leaf', items }: ListProps) {
  const { listItem, listIcon } = useStyle()
  return (
    <div>
      {items.map((node, idx) => (
        <div key={idx} className={listItem}>
          <div className={classNames([`icon-${icon}`, listIcon])} />
          <div>
            {node}
          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(List)

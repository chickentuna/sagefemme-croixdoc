import { faLeaf, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { HTMLProps, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  list: {
    paddingLeft: 0,
    listStyleType: 'none',
    lineHeight: 'normal',
    gap: 10,
    display: 'flex',
    flexFlow: 'column'
  },
  listItem: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'flex-start'
  },
  listIcon: {
    fontSize: 12,
    paddingTop: 7,
    margin: [0, 10]
  }
})

interface ListProps {
  icon?: IconDefinition
  children: ReactNode[]
}

function List ({ icon = faLeaf, children }: ListProps) {
  const { list, listItem, listIcon } = useStyle()

  return (
    <ul className={list}>
      {React.Children.map(children, (node, idx) => (
        <div key={idx} className={listItem}>
          <div className={listIcon}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <div>
            {node}
          </div>
        </div>
      ))}
    </ul>
  )
}

export default React.memo(List)

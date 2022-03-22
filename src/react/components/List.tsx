import { faLeaf, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { HTMLProps, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  list: {
    listStyleType: 'none',
    lineHeight: 'normal',
    gap: 10,
    display: 'flex',
    flexFlow: 'column',
    paddingLeft: 20
  },
  noPadding: {
    paddingLeft: 0
  },
  listItem: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'flex-start'
  },
  listIcon: {
    fontSize: 12,
    paddingTop: 7,
    marginRight: 10
  }
})

interface ListProps {
  icon?: IconDefinition
  children: ReactNode[]
  noPad?: boolean
}

function List ({ icon = faLeaf, children, noPad = false }: ListProps) {
  const { list, listItem, listIcon, noPadding } = useStyle()

  return (
    <ul className={classNames([list, { [noPadding]: noPad }])}>
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

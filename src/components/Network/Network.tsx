import React, { ReactElement } from 'react'
import s from './Network.module.css'
import classNames from 'classnames'

interface NetworkProps {
  id: string
  isActive: boolean
  handleLoad: (id) => void
}

export default function Network(p: NetworkProps): ReactElement {
  const { id, handleLoad } = p
  
  const handleClick = (id) => {
    handleLoad(id)
  }

  const nameClasses = classNames({
    [s.name]: true,
    [s.active]: p.isActive
  })

  return (
    <div className={s.item}>
      <div className={nameClasses} onClick={() => handleClick(id)}>  
        { id }
      </div>
    </div>
  )
}

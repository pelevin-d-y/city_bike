import React, { ReactElement, useState } from 'react'
import s from './Network.module.css'
import classNames from 'classnames'

import { ReactComponent as LikeDisable } from 'assets/like_disable.svg'
// import { ReactComponent as LikeActive } from 'assets/like_active.svg'

interface NetworkProps {
  id: string
  handleLoad: (id) => void
}

export default function Network(p: NetworkProps): ReactElement {
  const { id, handleLoad } = p

  const [active, setActive] = useState(false)
  
  const handleClick = (id) => {
    handleLoad(id)
    
    setActive(() => !active)
  }

  const nameClasses = classNames({
    [s.name]: true,
    [s.active]: active
  })

  return (
    <div className={s.item}>
      <div className={s.like}>
        { <LikeDisable /> }
      </div>
      <div className={nameClasses} onClick={() => handleClick(id)}>  
        { id }
      </div>
    </div>
  )
}

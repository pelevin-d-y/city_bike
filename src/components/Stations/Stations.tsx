import React, { ReactElement, useContext } from 'react'
import { TableContext } from 'context/tableContext'
import s from './Stations.module.css'

import { ReactComponent as LikeDisable } from 'assets/like_disable.svg'
import { ReactComponent as LikeActive } from 'assets/like_active.svg'

export default function Staions(): ReactElement {
  const { stateStations, likeStantions, setLikeStantions } = useContext(TableContext)

  const handleClick = (name) => {
    setLikeStantions((likeStations) => {
      let result

      if (likeStations.includes(name)) {
        result = likeStations.filter(el => el !== name)
      } else {
        result = [...likeStations, name]
      }
      return result
    })
  }

  const renderLike = (name) => {
    if (likeStantions.includes(name)) {
      return <LikeActive />
    }
    return<LikeDisable />
  }

  const renderStations = () => {
    if (stateStations.length === 0) {
      return <div className={s.item}>
        Station not found 
      </div>
    }

    return stateStations.map(station => {
      const { name } = station

      return (
        <div className={s.item} key={name}>
          <div className={s.like} onClick={() => handleClick(name)}>
            { renderLike(name) }
          </div>
          <div className={s.name}>
            { name }
          </div>
        </div>
      )
    })
  }
  
  return (
    <div>
      { renderStations() }
    </div>
  )
}

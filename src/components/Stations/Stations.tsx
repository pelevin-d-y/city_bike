import React, { ReactElement } from 'react'
import s from './Stations.module.css'
import { connect } from 'react-redux'

import { ReactComponent as LikeDisable } from 'assets/like_disable.svg'
import { ReactComponent as LikeActive } from 'assets/like_active.svg'

const stations = (p): ReactElement => {

  const handleClick = (name) => {
    // setLikeStantions((likeStations) => {
    //   let result

    //   if (likeStations.includes(name)) {
    //     result = likeStations.filter(el => el !== name)
    //   } else {
    //     result = [...likeStations, name]
    //   }
    //   return result
    // })
  }

  const renderLike = (name) => {
    // if (likeStantions.includes(name)) {
    //   return <LikeActive />
    // }
    return<LikeDisable />
  }

  const renderStations = () => {
    if (p.stations.length === 0) {
      return <div className={s.item}>
        Station not found 
      </div>
    }

    return p.stations.map(station => {
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

const mapStateToProps = (store) => {
  return {
    stations: store.stations.stations
  }
}

export default connect(mapStateToProps)(stations)
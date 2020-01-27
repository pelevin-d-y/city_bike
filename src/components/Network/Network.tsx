import React, { ReactElement } from 'react'
import s from './Network.module.css'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { setStations } from 'store/actions'
import fetchData from 'requests'

interface NetworkProps {
  id: string
  isActive: boolean
  setStations: (stations: []) => void
}

const Network = (p:NetworkProps): ReactElement => {
  const { id } = p
  
  const handleClick = async (id) => {
    const data = await fetchData(`/networks/${id}`)
    p.setStations(data.network.stations)
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

const mapDispatchToProps = (dispatch) => {
  return {
    setStations: (stations: []) => dispatch(setStations(stations))
  }
}

export default connect(() => ({}), mapDispatchToProps)(Network)
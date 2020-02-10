import React, { ReactElement } from 'react'
import s from './Network.module.css'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { fetchStantions } from 'store/actions'

interface NetworkProps {
  id: string
  isActive: boolean
  fetchStantions: (id: string) => void
}

const Network = (p:NetworkProps): ReactElement => {
  const { id } = p
  
  const handleClick = async (id) => {
    p.fetchStantions(`/networks/${id}`)
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
    fetchStantions: (id: string) => dispatch(fetchStantions(id))
  }
}

export default connect(() => ({}), mapDispatchToProps)(Network)
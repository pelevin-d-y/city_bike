import React, { ReactElement } from 'react'
import s from './Networks.module.css'
import { ReactComponent as LikeDisable } from 'assets/like_disable.svg'
import { connect } from 'react-redux'

const Networks = (p): ReactElement => {
  return (
    <div>
      {
        p.networks.map(network => {
          return (
            <div className={s.item} key={network.id}>
              <div className={s.like}>
                { <LikeDisable /> }
              </div>
              <div className={s.name}>  
                {network.id}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    networks: store.networks
  }
}

export default connect(
  mapStateToProps
)(Networks)
import React, { ReactElement } from 'react'
import { connect } from 'react-redux'

import Network from 'components/Network/Network'

const Networks = (p): ReactElement => {
  return (
    <div>
      {
        p.networks.map(network => {
          const { id } = network

          return (
            <Network id={id} isActive={false} key={id}/>
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
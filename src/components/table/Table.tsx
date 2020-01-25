import React, { useEffect } from 'react'
import s from './Table.module.css'
import { connect } from 'react-redux'
import { setNetworks } from 'store/actions'

import Networks from 'components/Networks/Networks'

const Table = (p) => {
  const BASE_URL = 'http://api.citybik.es/v2/'

  useEffect(() => {
    const loadNetworkList = async () => {
      const result = await fetch(`${BASE_URL}networks?fields=id,company`)
      const { networks } = await result.json()
      p.setNetworks(networks)
    }
    loadNetworkList()
  }, [p]);

  return (
    <div className="container">
      <div className={s.table}>
        <Networks />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNetworks: (networks: []) => dispatch(setNetworks(networks))
  }
}

export default connect(() => ({}), mapDispatchToProps)(Table)
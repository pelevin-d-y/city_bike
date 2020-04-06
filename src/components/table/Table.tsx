import React, { useEffect } from 'react'
import s from './Table.module.css'
import { connect } from 'react-redux'
import { fetchNetworks } from 'store/actions'

import Networks from 'components/Networks/Networks'
import Stations from 'components/Stations/Stations'
import { ReactComponent as Loader } from 'assets/loader.svg'

const Table = (p) => {
  useEffect(() => {
    p.fetchNetworks('networks?fields=id,company')
  });

  return (
    <div className="container">
       <div className={s.table}>
          <div className={s.column}>
            { (p.networks.length === 0) ? <Loader /> : <Networks /> }
          </div>
          <div className={s.column}>
            <Stations /> 
          </div>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNetworks: (url: string) => dispatch(fetchNetworks(url))
  }
}

const mapStateToProps = (store) => {
  return {
    networks: store.networks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
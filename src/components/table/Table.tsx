import React, { useEffect } from 'react'
import s from './Table.module.css'
import { connect } from 'react-redux'
import { fetchNetworks } from 'store/actions'

import Networks from 'components/Networks/Networks'
import Stations from 'components/Stations/Stations'
import { ReactComponent as Loader } from 'assets/loader.svg'

const Table = ({fetchNetworks, networks, isLoader}) => {
  useEffect(() => {
    fetchNetworks('networks?fields=id,company')
  }, [fetchNetworks]);

  return (
    <div className="container">
       <div className={s.table}>
          <div className={s.column}>
            { (networks.length === 0) ? <Loader /> : <Networks /> }
          </div>
          <div className={s.column}>
            { isLoader ? <Loader /> : <Stations /> }
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
    networks: store.networks,
    isLoader: store.stations.isLoader,
    isActive: store.stations.isActive
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
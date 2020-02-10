import React, { useEffect } from 'react'
import s from './Table.module.css'
import { connect } from 'react-redux'
import { fetchNetworks } from 'store/actions'

import Networks from 'components/Networks/Networks'
import Stations from 'components/Stations/Stations'
import { ReactComponent as Loader } from 'assets/loader.svg'

const Table = (p) => {
  const BASE_URL = 'http://api.citybik.es/v2/'

  useEffect(() => {
    const loadNetworkList = async () => {
      p.fetchNetworks('networks?fields=id,company')
    }
    loadNetworkList()
  }, [p]);

  return (
    <div className="container">
       <div className={s.table}>
          <div className={s.column}>
            <Networks />
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

export default connect(() => ({}), mapDispatchToProps)(Table)
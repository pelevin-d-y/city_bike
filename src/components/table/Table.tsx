import React, { useState, useEffect } from 'react'
import s from './Table.module.css'
import { TableContext } from 'context/tableContext'
import fetchData from 'requests'

import Networks from 'components/Networks/Networks'
import Stations from 'components/Stations/Stations'
import { ReactComponent as Loader } from 'assets/loader.svg'

export default function Table() {
  const [stateNetworks, setStateNetwors] = useState([])
  const [networksLoader, toggleLoader] = useState(true)
  const [stations, setStations] = useState([])
  const [stationLoader, toggleStationLoader] = useState(true)
  const [activeNetwork, setActiveNetwork] = useState(null)
  const [likeStantions, setLikeStantions] = useState([])

  const loadStations = async (id) => {
    try {
      toggleStationLoader(true)
      const data = await fetchData(`/networks/${id}`)
      const stations = data.network.stations
      setActiveNetwork(id)
      toggleStationLoader(false)
      setStations(stations)
    } catch(e) {
      console.log('Load Stations Error ==>', e)
    }
  }

  useEffect(() => {
    const loadNetworkLists = async () => {
      try {
        const data = await fetchData(`networks?fields=id,company`)
        const { networks } = data
        setActiveNetwork(networks[0].id)
        setStateNetwors(networks)
        toggleLoader(false)
      } catch(e) {
        console.log('Load Networks Error ==>', e)
      }
    }

    loadNetworkLists()
  }, []);

  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.name}>
          Network: {activeNetwork}
        </div>
        <div className={s.count}>
          Station count: {stations.length}
        </div>
      </div>
      <TableContext.Provider value={{stations, loadStations, stationLoader, toggleStationLoader, likeStantions, setLikeStantions}}>
        <div className={s.table}>
          <div className={s.column}>
            {networksLoader ? 
              <Loader /> : 
              <Networks networks={stateNetworks} activeNetwork={activeNetwork}/>
            }
          </div>
          <div className={s.column}>
            {stationLoader ?
              <Loader /> :
              <Stations /> 
            } 
          </div>
        </div>
      </ TableContext.Provider>
    </div>
  )
}
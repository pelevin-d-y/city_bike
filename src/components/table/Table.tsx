import React, { useState, useEffect } from 'react'
import s from './Table.module.css'
import { TableContext } from 'context/tableContext'
import fetchData from 'requests'

import Networks from 'components/Networks/Networks'
import Stations from 'components/Stations/Stations'
import { ReactComponent as Loader } from 'assets/loader.svg'

export default function Table() {
  const [stateNetworks, setStateNetwors] = useState([])
  const [stateNetworksLoader, setStateNetworksLoader] = useState(true)
  const [stateStations, stateSetStations] = useState([])
  const [stateStationLoader, setStateStationLoader] = useState(true)
  const [stateActiveNetwork, setStateActiveNetwork] = useState(null)
  const [likeStantions, setLikeStantions] = useState([])

  const loadStations = async (id) => {
    try {
      setStateStationLoader(true)
      const data = await fetchData(`/networks/${id}`)
      const stations = data.network.stations
      setStateActiveNetwork(id)
      setStateStationLoader(false)
      stateSetStations(stations)
    } catch(e) {
      console.log('Load Stations Error ==>', e)
    }
  }

  useEffect(() => {
    const loadNetworkLists = async () => {
      try {
        const data = await fetchData(`networks?fields=id,company`)
        const { networks } = data
        setStateActiveNetwork(networks[0].id)
        setStateNetwors(networks)
        setStateNetworksLoader(false)
      } catch(e) {
        console.log('Load Networks Error ==>', e)
      }
    }

    loadNetworkLists()
  }, []);

  const contextValue = {
    stateStations, 
    loadStations, 
    stateStationLoader, 
    setStateStationLoader, 
    likeStantions, 
    setLikeStantions
  }

  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.name}>
          Network: {stateActiveNetwork}
        </div>
        <div className={s.count}>
          Station count: {stateStations.length}
        </div>
      </div>
      <TableContext.Provider value={contextValue}>
        <div className={s.table}>
          <div className={s.column}>
            {stateNetworksLoader ? 
              <Loader /> : 
              <Networks networks={stateNetworks} activeNetwork={stateActiveNetwork}/>
            }
          </div>
          <div className={s.column}>
            {stateStationLoader ?
              <Loader /> :
              <Stations /> 
            } 
          </div>
        </div>
      </ TableContext.Provider>
    </div>
  )
}
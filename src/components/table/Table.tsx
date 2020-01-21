import React, { useState, useEffect } from 'react'
import s from './Table.module.css'
import { TableContext } from 'context/tableContext'

import Networks from 'components/Networks/Networks'
import Stations from 'components/Stations/Stations'
import { ReactComponent as Loader } from 'assets/loader.svg'

type TableProps = {} 

export default function Table(p: TableProps) {
  const [stateNetworks, setStateNetwors] = useState([])
  const [networksLoader, toggleLoader] = useState(true)
  const [stations, setSttions] = useState([])
  const [stationLoader, toggleStationLoader] = useState(true)
  const loadStations =  async (id) => {
    const {REACT_APP_BASE_URL} = process.env

    toggleStationLoader(true)
    const response = await fetch(`${REACT_APP_BASE_URL}/networks/${id}`)
    const data = await response.json()
    const stations = data.network.stations
    toggleStationLoader(false)
    setSttions(stations)
  }

  useEffect(() => {
    const {REACT_APP_BASE_URL} = process.env

    const loadNetworkLists = async () => {
      try {
        const result = await fetch(`${REACT_APP_BASE_URL}networks?fields=id,company`)
        const { networks } = await result.json()
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
      <TableContext.Provider value={{stations, loadStations, stationLoader, toggleStationLoader}}>
        <div className={s.table}>
          <div className={s.column}>
            {networksLoader ? 
              <Loader /> : 
              <Networks networks={stateNetworks} 
            />}
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
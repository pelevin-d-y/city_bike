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
  const [stationLoader, toggleStationLoader] = useState(false)
  const toggleStations = (stations) => {
    setSttions(stations)
  }

  useEffect(() => {
    const {REACT_APP_BASE_URL} = process.env

    const loadNetworkLists = async () => {
      try {
        const result = await fetch(`${REACT_APP_BASE_URL}networks?fields=id,company`)
        const { networks } = await result.json()
        toggleLoader(false)
        setStateNetwors(networks)
      } catch(e) {
        console.log('Load Networks Error ==>', e)
      }
    }

    loadNetworkLists()
  }, []);

  return (
    <div className="container">
      <TableContext.Provider value={{stations, toggleStations, stationLoader, toggleStationLoader}}>
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
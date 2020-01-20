import React, { useState, useEffect } from 'react'
import s from './Table.module.css'
import { TableContext } from 'context/tableContext'

import Networks from 'components/Networks/Networks'
import Stations from 'components/Stations/Stations'

type TableProps = {} 

export default function Table(p: TableProps) {
  const [stateNetworks, setNetwors] = useState([]);
  const [stations, setSttions] = useState([])

  const toggleStations = (stations) => {
    setSttions(stations)
  }

  useEffect(() => {
    const {REACT_APP_BASE_URL} = process.env

    const loadNetworkLists = async () => {
      const result = await fetch(`${REACT_APP_BASE_URL}networks?fields=id,company`)
      const { networks } = await result.json()
      setNetwors(networks)
    }
    loadNetworkLists()
  }, []);

  return (
    <div className="container">
      <TableContext.Provider value={{stations, toggleStations}}>
        <div className={s.table}>
          <div className={s.column}>
            <Networks networks={stateNetworks} />
          </div>
          <div className={s.column}>
            <Stations />
          </div>
        </div>
      </ TableContext.Provider>
    </div>
  )
}
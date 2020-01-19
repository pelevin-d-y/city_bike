import React, { useState, useEffect } from 'react'
import s from './Table.module.css'

import { Networks } from 'components/Networks/Networks'

type TableProps = {} 

export default function Table(p: TableProps) {
  const BASE_URL = 'http://api.citybik.es/v2/'
  console.log('p', p)
  const [stateNetworks, setNetwors] = useState([]);

  useEffect(() => {
    const loadNetworkLists = async () => {
      const result = await fetch(`${BASE_URL}networks?fields=id,company`)
      const { networks } = await result.json()
      console.log(networks)
      setNetwors(networks)
    }
    loadNetworkLists()
  }, []);

  return (
    <div className="container">
      <div className={s.table}>
        <Networks networks={stateNetworks}   />
      </div>
    </div>
  )
}
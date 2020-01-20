import React, { ReactElement, useContext, useEffect } from 'react'
import { TableContext } from 'context/tableContext'

export default function Staions(): ReactElement {
  const { stations } = useContext(TableContext)

  const renderStations = () => {
    if (stations.length === 0) {
      return <div>
        Station not found 
      </div>
    }

    return stations.map(station => {
      return <div key={station.name}>
        { station.name }
      </div>
    })
  }
  
  return (
    <div>
      { renderStations() }
    </div>
  )
}

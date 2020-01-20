import React, { ReactElement, useContext } from 'react'
import { TableContext } from 'context/tableContext'

export default function Staions(): ReactElement {
  const { stations } = useContext(TableContext)
  
  console.log('context.stations', stations)
  return (
    <div>
      {stations.map(station => {
        return <div key={station.name}>
          { station.name }
        </div>
      })}
    </div>
  )
}

import React, { ReactElement, useEffect, useContext, useRef } from 'react'
import Network from 'components/Network/Network'
import { TableContext } from 'context/tableContext'
interface Props {
  networks: any[]
}

export default function Networks(p: Props): ReactElement {
  const context = useRef(useContext(TableContext))

  const handleLoad = (id) => {
    context.current.loadStations(id)
  }

  useEffect(() => {
    const firstNetwork = p.networks[0]
    if (firstNetwork?.id) {
      context.current.loadStations(p.networks[0].id)
    }
  }, [context, p.networks])
  console.log('p.networks', p.networks)
  return (
    <div>
      {
        p.networks.map(network => {
          const { id } = network
          return (
            <Network id={id} handleLoad={handleLoad} key={id}/>
          )
        })
      }
    </div>
  )
}

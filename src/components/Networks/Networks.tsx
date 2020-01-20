import React, { ReactElement, useContext, useEffect } from 'react'
import s from './Networks.module.css'
import { TableContext } from 'context/tableContext'

import { ReactComponent as LikeDisable } from 'assets/like_disable.svg'
// import { ReactComponent as LikeActive } from 'assets/like_active.svg'

interface Props {
  networks: any[]
}

export default function Networks(p: Props): ReactElement {
  const Context = useContext(TableContext)

  const getStation = async (id: string) => {
    const {REACT_APP_BASE_URL} = process.env

    const loadStations = async () => {
      const response = await fetch(`${REACT_APP_BASE_URL}/networks/${id}`)
      const data = await response.json()
      Context.toggleStations(data.network.stations)
      Context.toggleStationLoader(false)
    }
    Context.toggleStationLoader(true)
    loadStations()
  }

  useEffect(() => {
      console.log('p.networks', p.networks)
      getStation(p.networks[0].id)
    
  }, [p.networks, getStation])


  return (
    <div>
      {
        p.networks.map(network => {
          const { id } = network

          return (
            <div className={s.item} key={network.id}>
              <div className={s.like}>
                { <LikeDisable /> }
              </div>
              <div className={s.name} onClick={() => getStation(id)}>  
                { id }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

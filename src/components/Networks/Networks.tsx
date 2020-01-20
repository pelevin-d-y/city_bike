import React, { ReactElement, useContext } from 'react'
import s from './Networks.module.css'
import { TableContext } from 'context/tableContext'

import { ReactComponent as LikeDisable } from 'assets/like_disable.svg'
// import { ReactComponent as LikeActive } from 'assets/like_active.svg'

interface Props {
  networks: any[]
}

export default function Networks(p: Props): ReactElement {
  const Context = useContext(TableContext)
  const getStantion = async (id: string) => {
    const {REACT_APP_BASE_URL} = process.env

    const loadStations = async () => {
      const response = await fetch(`${REACT_APP_BASE_URL}/networks/${id}`)
      const data = await response.json()
      Context.toggleStations(data.network.stations)
    }
    loadStations()
  }

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
              <div className={s.name} onClick={() => getStantion(id)}>  
                { id }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

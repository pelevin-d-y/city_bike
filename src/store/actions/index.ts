export const fetchNetworks = (url: string) => ({
  type: 'FETCH_NETWORKS',
  url
})

export const fetchStantions = (url: string) => ({
  type: 'FETCH_STATIONS',
  url
})

export const setNetworks = networks => ({
  type: 'SET_NETWORKS',
  networks
})


export const setStations = stations => ({
  type: 'SET_STATIONS',
  stations
})

export const setLikes = networksId => ({
  type: 'SET_LIKES',
  networksId
})

export const toggleLoader = isActive => ({
  type: 'TOGGLE_LOADER',
  isActive
})

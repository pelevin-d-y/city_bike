const setNetworks = (state = [], action:{type: string, stations: []}) => {
  switch (action.type) {
    case 'SET_STATIONS':
      return action.stations
    default:
      return state
  }
}

export default setNetworks
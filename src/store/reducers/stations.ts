const initialState = {
  stations: [],
  isLoader: false,
  isActive: false
}

const setNetworks = (state = initialState, action:{type: string, stations: [], isLoader?: boolean, isActive?: boolean}) => {
  switch (action.type) {
    case 'SET_STATIONS':
      return {
        ...state,
        stations: action.stations
      }
    case 'UPDATE_LOADER':
      return {
        ...state,
        isLoader: action.isLoader
      }
    case 'UPDATE_ISACTIVE':
      return {
        ...state,
        isActive: action.isActive
      }
    default:
      return state
  }
}

export default setNetworks
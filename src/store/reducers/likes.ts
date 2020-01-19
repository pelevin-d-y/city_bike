interface networkInt {
  type: string
  networkId: string
}

const setLikes = (state: string[] = [], action: networkInt) => {
  switch (action.type) {
    case 'SET_LIKES':
      if (state.includes(action.networkId)) {
        return state.filter(el => action.networkId !== el)
      } else {
        return [...state, action.networkId]
      }
      
    default:
      return state
  }
}

export default setLikes
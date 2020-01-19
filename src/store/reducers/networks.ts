const setNetworks = (state = [], action:{type, networks}) => {
  switch (action.type) {
    case 'SET_NETWORKS':
      return action.networks
    default:
      return state
  }
}

export default setNetworks
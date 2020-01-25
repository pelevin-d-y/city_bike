const setNetworks = (state = [], action:{type: string, networks: []}) => {
  switch (action.type) {
    case 'SET_NETWORKS':
      return action.networks
    default:
      return state
  }
}

export default setNetworks
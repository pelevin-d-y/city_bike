import React from 'react'

export const TableContext = React.createContext({
  stations: [],
  setStations: function() {
    console.log(this, this.stations)
  }
});
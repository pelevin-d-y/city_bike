import { call, put, takeEvery } from 'redux-saga/effects'
import fetchData from '../requests/index'

function* fetchNetworks(action: any) {
  const data = yield call(fetchData, action.url);
  yield put({type: "SET_NETWORKS", networks: data.networks});
}

function* fetchStations(action: any) {
  const data = yield call(fetchData, action.url);
  console.log('SET_STATIONS', data.network.stations)
  yield put({type: "SET_STATIONS", stations: data.network.stations});
}

function* mySaga() {
  yield takeEvery("FETCH_NETWORKS", fetchNetworks);
  yield takeEvery("FETCH_STATIONS", fetchStations);
}

export default mySaga;
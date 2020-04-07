import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import fetchData from '../requests/index'

function* fetchNetworks(action: any) {
  console.log('fetchNetworks')
  const data = yield call(fetchData, action.url);
  yield put({type: "SET_NETWORKS", networks: data.networks});
}

function* fetchStations(action: any) {
  yield put({type: "UPDATE_LOADER", isLoader: true})
  const data = yield call(fetchData, action.url);
  yield put({type: "UPDATE_LOADER", isLoader: false})
  yield put({type: "SET_STATIONS", stations: data.network.stations});
}

function* mySaga() {
  yield takeEvery("FETCH_NETWORKS", fetchNetworks);
  yield takeLatest("FETCH_STATIONS", fetchStations);
}

export default mySaga;
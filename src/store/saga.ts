import { all, call, put, takeLatest } from 'redux-saga/effects'
import { nftApi } from '../api/nft.api'

import {
  nftRequest,
  nftRequestSuccess,
  nftRequestFailure
} from './nftSlice'

export function* nftRequestSaga (action: any) {
  try {
    const { data } = yield call(
      nftApi.requestNft,
      action.payload
    )
    if (data) {
      yield put(nftRequestSuccess(data))
    }
  } catch (error) {
    yield put(nftRequestFailure())
  }
}

function* rootSaga() {
  yield all([
    takeLatest(nftRequest.type, nftRequestSaga),
  ])
}

export default rootSaga
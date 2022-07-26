// node_modules
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

const API_URL = 'https://api.opensea.io/api/v1/assets';

interface ProtoType {
  next: string,
  assets: [],
  previous: string
}

interface nftsState {
  nfts: [];
  count: number;
  isLoading: boolean;
  isError: boolean;
};

const initialState: nftsState = {
  nfts: [],
  count: 0,
  isLoading: false,
  isError: false
};

const nftsSlice = createSlice({
  name: "nft",
  initialState: initialState,
  reducers: {
    nftRequest(state: nftsState, action) {
      state.isLoading = true
    },
    nftRequestSuccess(state: nftsState, action: PayloadAction<ProtoType>) {
      state.isLoading = false
      state.isError = false
      state.nfts = action.payload.assets
    },
    nftRequestFailure(state: nftsState) {
      state.isLoading = false
      state.isError = true
    }
  },
});

const nftsActions = nftsSlice.actions;

export const {
  nftRequest,
  nftRequestSuccess,
  nftRequestFailure
} = nftsActions

export default nftsSlice.reducer;

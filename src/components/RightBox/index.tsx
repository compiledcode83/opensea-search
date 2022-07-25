import {
  Box,
  Grid,
  Input
} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import NftCard from '../NftCard'

import { RightBoxStyle } from './index.style'
import { nftRequest } from '../../store/nftSlice';

const RightBox: React.FC = () => {
  const dispatch = useDispatch()
  const nfts = useSelector((state: RootState) => state.nft.nfts)
  const isLoading = useSelector((state: RootState) => state.nft.isLoading)

  useEffect(() => {
    dispatch(nftRequest())
  }, [])
  return (
    <RightBoxStyle>
      {isLoading && "loading..." }
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container spacing={2}>
          {nfts &&
            nfts.map((nft, i) => (
              <Grid key={i} item xs={6} sm={3} md={3} lg={3}>
                <NftCard
                  image={nft.image_preview_url}
                  name={nft.name}
                  url={nft.permalink}
                  date={nft.asset_contract.created_date}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </RightBoxStyle>
  )
}

export default RightBox  
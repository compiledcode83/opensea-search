import {
  Box,
  Grid,
  Alert,
  LinearProgress
} from '@mui/material'
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { nftRequest } from '../../store/nftSlice'
import CustomButton from '../CustomButton'
import NftCard from '../NftCard'

import { NftlistStyle } from './index.style'
import Typography from '@mui/material/Typography';

const Nftlist: React.FC = () => {
  const dispatch = useDispatch()
  const account = useSelector((state: RootState) => state.nft.account)
  const nfts = useSelector((state: RootState) => state.nft.nfts)
  const cursor = useSelector((state: RootState) => state.nft.cursor)
  const isLoading = useSelector((state: RootState) => state.nft.isLoading)
  const isError = useSelector((state: RootState) => state.nft.isError)
  const handleShowMore = useCallback(() => {
    if (cursor && account)
      dispatch(nftRequest({
        account,
        cursor
      }))
  }, [cursor, account])

  return (
    <NftlistStyle>
      {!isLoading && !isError && !!account && nfts.length === 0 &&
        <Typography>No Nfts</Typography>
      }
      {isLoading && <LinearProgress className="list-loadingprogress"/> }
      {isError && <Alert severity="error">There's an error while loading Nfts!</Alert> }
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="grid-nfts">
        <Grid container spacing={2}>
          {nfts &&
            nfts.map((nft: any, i) => (
              <Grid key={i} item xs={4} sm={4} md={3} lg={2}>
                <NftCard
                  image={nft.image}
                  name={nft.name}
                  url={nft.external_url}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
      { !!cursor &&
        <CustomButton
          caption="Show More"
          onClick={handleShowMore}
        />
      }
    </NftlistStyle>
  )
}

export default Nftlist  
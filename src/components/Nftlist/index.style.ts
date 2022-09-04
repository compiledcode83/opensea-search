import styled from '@emotion/styled'

export const NftlistStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1rem 0',
    '.MuiTypography-root': {
      fontSize: '2rem',
      textAlign: 'center'
    },
    '.list-loadingprogress': {
      marginBottom: '1rem'
    },
    '.grid-nfts': {
      marginBottom: '2rem'
    }
  }
})

import axios from 'axios'

const learnweb3Address = '0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33'
const buildspaceAddress = '0x3cd266509d127d0eac42f4474f57d0526804b44e'

const options = {method: 'GET', headers: {Accept: 'application/json', 'X-API-Key': 'test'}};
const limit = 24

export const nftApi = {
  async requestNft(params: any) {
    const {account, cursor} = params
    let url = `https://deep-index.moralis.io/api/v2/${account}/nft?chain=polygon&limit=${limit}&format=decimal&token_addresses=${learnweb3Address}&token_addresses=${buildspaceAddress}`;
    if (cursor) {
      url += `&cursor=${cursor}`
    }
    try {
      const res = await axios({
        method:'GET',
        headers: {
          Accept: 'application/json',
          "X-API-KEY": "test"
        },
        url
      })
      const cursor = res.data.cursor
      const nfts:any = res.data.result.reduce((nfts: any, el: any) => {
        return [...nfts, JSON.parse(el.metadata)]
      }, [])
      return { data: { nfts, cursor }}
    } catch (err) {
      throw err
    }
  }
}

import axios from 'axios'

const learnweb3Address = '0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33'
const buildspaceAddress = '0x3CD266509D127d0Eac42f4474F57D0526804b44e'

const options = {method: 'GET', headers: {Accept: 'application/json', 'X-API-Key': 'test'}};

export const nftApi = {
  async requestNft(account: string) {
    let url = `https://deep-index.moralis.io/api/v2/${account}/nft?chain=polygon&format=decimal&token_addresses=${learnweb3Address}&token_addresses=${buildspaceAddress}`;
    try {
      const res = await axios({
        method:'GET',
        headers: {
          Accept: 'application/json',
          "X-API-KEY": "test"
        },
        url
      })
      return { data: res.data }
    } catch (err) {
      throw err
    }
  }
}

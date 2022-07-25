import axios from 'axios'

export const nftApi = {
  async requestNft() {
    try {
      const res = await axios({
        method:'GET',
        url:'https://api.opensea.io/api/v1/assets'
      })
      return { data: res.data }
    } catch (err) {
      throw err
    }
  }
}

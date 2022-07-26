import axios from 'axios'

export const nftApi = {
  async requestNft(params: any) {

    let url = 'https://api.opensea.io/api/v1/assets'
    var operator = '?';
    Object.keys(params).map(function(key, index) {
      if(params[key] !== "") {
        url += operator;
        url += key + "=" + params[key];
        if(operator === '?') operator = '&'
      }
    });

    try {
      const res = await axios({
        method:'GET',
        headers: {
          "X-API-KEY": "b726e508da2d44cbbaa31eaf601d5c38"
        },
        url
      })
      return { data: res.data }
    } catch (err) {
      throw err
    }
  }
}

import axios from '../axios.config'



export const getTranslatebagList = async () => {
    const res = await axios.post('pay/gettranslatebaglist')
    console.log(res);
    return res
}


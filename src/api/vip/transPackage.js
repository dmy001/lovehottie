import axios from '../axios.config'

/* 翻译包列表 */

export const getTranslatebagList = async () => {
    const res = await axios.post('pay/gettranslatebaglist')
    return res.data
}


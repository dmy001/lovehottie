import axios from '../axios.config'




export /**
 *
 *
 * @param {*} 获取偶遇页面的数据
 * @param {*} areaCode
 * @return {*} 
 */
    const getMineInformation = async (areaCode) => {
        const res = await axios.post('ad/area/getContent', { areaCode })
        return res.data
    }
// const getFindLoveIdList = async (aaa) => {
//     const res = await axios.post('Member/Like/findIfIloveList', { aaa })
//     return res.data
// }
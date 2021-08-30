
import axios from '../axios.config'

/**  获得金币个数
 *    _
 *  
  * 
  * 
  * @return {*} 
  */
export const getGold = async (_) => {
    const res = await axios.get("im/getMemberGold", {
        _
    });
    return res.data
}



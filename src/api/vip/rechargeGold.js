
import axios from '../axios.config'

/**  获得金币个数
 *    _
 *  
  * 
  * 
  * @return {*} 
  * {
    "success": true,
    "msg": "操作成功",
    "obj": 0.00,
    "attributes": {
        "bag35": 0,
        "charbag": 0
    }
    }
  */
 
export const getGold = async (_) => {
    const res = await axios.get("im/getMemberGold", {
        _
    });
    return res.data
}



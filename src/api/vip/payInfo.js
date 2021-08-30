import axios from '../axios.config'
/**  获得优惠券
*
  * 
  * 
  * 
  * @return {*} 
  */
export const getDiscount = async () => {
    const res = await axios.get("holiday/coupon");
    return res.data
}



import axios from '../axios.config'
/**  获得优惠券
*
  * 
  {
    "success": true,
    "msg": "SUCCESS",
    "obj": 0,
    "attributes": null
}
  * 
  * @return {*} 
  */
export const getDiscount = async () => {
  const res = await axios.get("holiday/coupon");
  return res
}

export /**
 * 获得优惠券的种类
 *
 * @return {*} 
 */
  const getCouponType = async (type, couponsId) => {
    const res = await axios.get('holiday/couponType', {
      type, couponsId
    })
    return res;
  }


export /**
 * 点击充值按钮，发送支付信息
 *
 * @return {*}
 */
  const SendPayInfo = async (couponsId, total_fell, paid, mfstRelevel, time, types, femaleid, mid, productId) => {
    const res = await axios.get('pay/subgoldpay', {
      couponsId,
      total_fell,
      paid,
      mfstRelevel,
      time,
      types,
      femaleid,
      mid,
      productId
    })
    return res;
  }
import axios from '../axios.config'

export /**获取信息通知
 *  
 *
 * @return {*} 
 * attributes: null
    msg: "成功"[
  {
    "notiId": 19200249,
    "notiGagaid": null,
    "notiGagaidisnoticed": 60020615,
    "notiSouce": null,
    "notiContent": "<span class=\"tx\"><a href=\"http://www.lovehottie.com/Member/otherHome/60018139\"><img src=\"https://sources.lovehottie.com/086d99323aa845469c4380298bc781e339a73c9a0897400f9d9b7dd1daa575ea\"></a></span><p><input type=\"hidden\" value=\"http://www.lovehottie.com/Member/Notice/gotonoticepage?url=Member/myinformation\" class=\"gotourl\" /><span class=\"nm\" title=\"johnstarlight\"><a href=\"http://www.lovehottie.com/Member/otherHome/60018139\">johnstarlight</a></span>成为了您新的好友<br></p>",
    "notiTime": 1630317482000,
    "notiTemplateid": 3,
    "showTime": "2021-08-30 09:58:02",
    "dtId": null
  },
]
    success: true
 */
    const getNotice = async () => {
        const res = await axios.get("Member/Notice/ajaxnotice");
        return res
    }


export  /** 获取加好友信息
   *attributes: null
    msg: "成功"
    list: []
    mList: [{gid: "20ad74d3c6554ec99de5e1648af12fcc",…}, {gid: "bf7c9a9bf23b4489833ce4e62de74e49",…},…]
    0: {gid: "20ad74d3c6554ec99de5e1648af12fcc",…}
    1: {gid: "bf7c9a9bf23b4489833ce4e62de74e49",…}
    success: true
   *
   * @return {*} 
   */
    const getFriendNotice = async () => {
        const res = await axios.get("Member/Friend/ajaxfriend");
        return res
    }


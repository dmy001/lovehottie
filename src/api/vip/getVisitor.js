import axios from '../axios.config.js'

/**  获得访客列表
*
      list2: [
        {
          visiGagaid: 60015820,
          visiDatetime: "Aug 28, 2021, 2:50:28 PM",
          member: {
            membGagano: "60017173",
            membGagaid: 60015820,
            membNickname: "Jeff",
            membEmail: "6summerfun@gmail.com",
            membBigimg:
              "https://sources.lovehottie.com/a972a0eeb7c248d8852c3ba89095762c",
            online: 0,
            showweight: 0,
            showheight: 0,
            isagainlogin: 0,
            ispaypalreg: 0,
            age: 0,
          },
          showDate: 1630162228000,
        },
        {
          visiGagaid: 6473211,
          visiDatetime: "Aug 28, 2021, 12:21:14 PM",
          member: {
            membGagano: "40526002",
            membGagaid: 6473211,
            membNickname: "Lina",
            membEmail: "l9in42ec@linshiyouxiang.net",
            membBigimg:
              "https://images.gagahi.com/A-984e16852b824d688adb7b1ce535422c",
            online: 0,
            showweight: 0,
            showheight: 0,
            isagainlogin: 0,
            ispaypalreg: 0,
            age: 0,
          },
          showDate: 1630153274000,
        },
        {
          visiGagaid: 6545582,
          visiDatetime: "Aug 28, 2021, 9:51:08 AM",
          member: {
            membGagano: "40599613",
            membGagaid: 6545582,
            membNickname: "lisha",
            membEmail: "qqkdiosrs@outlook.com",
            membBigimg:
              "https://images.gagahi.com/A-c1ffb343a77f48148bb39e3f2bdfa2ca",
            online: 0,
            showweight: 0,
            showheight: 0,
            isagainlogin: 0,
            ispaypalreg: 0,
            age: 0,
          },
          showDate: 1630144268000,
        },
      ],

  * @return {*} 
  */
export const getVisitor = async (endDay, page) => {
    const res = await axios.post("Member/Visitor/getVisitor", {
        endDay,
        page
    });
    return res
}



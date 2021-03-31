import axios from '../axios.config'
import crypto from 'crypto'
import qs from 'qs'



function login(params){
  let md5 = crypto.createHash("md5")
  md5.update(params.passWord)
  let password = md5.digest('hex')
  params.passWord = password

  return axios({
   url: 'Platform/login',
   data: qs.stringify(params),
   method: 'post',
   headers: {
    'Content-Type':'application/x-www-form-urlencoded'
   }
  }) 
}


export default login
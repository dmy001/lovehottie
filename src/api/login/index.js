import axios from '../axios.config'
import crypto from 'crypto'
import qs from 'qs'



function login(params){
  let md5 = crypto.createHash("md5")
  md5.update(params.passWord)
  let password = md5.digest('hex')
  params.passWord = password
  console.log(qs.stringify(params))
 return axios.post('Platform/login',qs.stringify(params)) 
}


export default login
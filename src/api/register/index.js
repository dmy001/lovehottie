import axios from '../axios.config'
import qs from 'qs'

// function register(obj){

// }

function checkMobile(params){
  return axios({
    url: 'Platform/checkMobile',
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
     }
  })
}

function getMobileCode(params){
  return axios.post('Platform/sendMobileCode',params)
}

export default{checkMobile,getMobileCode}
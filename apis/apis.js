const axios = require('./axios')

const baseUrl = "http://47.113.230.184:9527"

export function getlist(){
	return axios({
		url:baseUrl + '/api/goodList'
	})
}
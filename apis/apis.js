const axios = require('./axios')

const baseUrl = "http://47.113.230.184:9527"

export function getlist(){
	return axios({
		url:baseUrl + '/api/goodList'
	})
}

// 请求单个商品  获取商品详情（商品介绍页面）detail
// detail?goodId必传

export function getdetail(data){
	return axios({
		url:baseUrl + '/api/detail',
		data:data
	})
}

// 登录  login
// 登录
/*
 *请求方式为：get
 *userName
 *password
 *响应内容{code:0,token:null}用户名或密码错误   {code:1,token:"fffsdfe",userName:"veb",userId:}成功返回token
 */
export function getlogin(data){
	return axios({
		url:baseUrl + '/api/login',
		data:data	
	})
}

// 注册  register
/*
 *请求方式为：get
 *userName
 *password
 *响应内容{code:0}被占用   {code:1}成功
 */
export function getregister(data){
	return axios({
		url:baseUrl + '/api/register'	,
		data:data
	})
}

// // 加入购物车 add
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}添加成功 {code:2} 插入失败
*/
// 添加购物车 add
//  goodId token
export function getadd(data){
	return axios({
		url:baseUrl + '/api/add',
		data:data	
	})
}

// 移除购物车商品  remove
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}添加成功 {code:2} 插入失败
移除购物车每次移除一个到0的话就没法移除了但是还是会显示移除成功code==1
*/
export function getremove(data){
	return axios({
		url:baseUrl + '/api/remove',
		data:data	
	})
}

// 删除购物车商品  del 
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}删除成功 {code:2} 删除失败 */
 
 export function getdel(data){
 	return axios({
 		url:baseUrl + '/api/del',
		data:data	
 	})
 }
 
 // 获取購物車列表
 // shopList （孟哥的接口文档里有）
 export function getshopList(data){
 	return axios({
 		url:baseUrl + '/api/shopList',
		data:data	
 	})
 }
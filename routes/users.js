// 用户管理模块
const router = require('koa-router')()
const User = require('../../models/userSchema')
const utils = require('./../utils/util')

router.prefix('/users')

router.post('/login',async (ctx, next) => {
	try{
		const {
			userName,
			userPwd
		} = ctx.request.body
		
		const res = await User.findOne({
			userName,
			userPwd
		})
		
		if(res) {
			ctx.body = util.SUCCESS(res)
		} else {
			ctx.body = util.fail('账号或密码不正确')
		}
	} catch(error) {
		ctx.body = util.fail(error.msg)
	}
})

router.get('/bar', function(ctx, next) {
	ctx.body = 'this is a users/bar response'
})

module.exports = router

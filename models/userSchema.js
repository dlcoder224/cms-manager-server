const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
	'userId': Number,
	'userName': String,
	'userPwd': String,
	'userEmail': String,
	'mobile': String,
	'sex': Number,
	'deptId': [], // 部门
	'job': String, // 岗位
	'state': {
		type: Number,
		default: 1
	}, // 1、在职 2、离职 3、试用期
	'role': {
		type: Number,
		default: 1
	}, // 0 ：管理员 1：普通用户
	'roleList': [], // 系统角色
	'createTime': {
		type: Date,
		default: Date.now()
	},
	'lastLoginTime': {
		type: Date,
		default: Date.now()
	}, // 更新时间
	'remark': String
})


moudle.exposts = mongoose.model('users', userSchema, 'users')

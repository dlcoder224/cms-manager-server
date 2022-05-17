// 日志存储

const log4js = require("log4js");
const logger = log4js.getLogger();

const levels = {
	"trace": log4js.levels.TRACE,
	"debug": log4js.levels.DEBUG,
	"info": log4js.levels.INFO,
	"warn": log4js.levels.WARN,
	"error": log4js.levels.ERROR,
	"fatal": log4js.levels.FATAL,
}

log4js.configure({
	   appenders: {
	      console: { type: 'console' },
	      info: { type: 'file', filename: 'logs/all-logs.log' },
		  error: {
			  type: 'file',
			  filename: 'logs/log',
			  pattern: 'yyyy-MM-dd.log',
			  alwaysIncludePattern:true //设置文件名为 filename + pattern
		  }
	    },
	    categories: {
	      default: { appenders: [ 'console' ], level: 'debug' },
		  info: {
			  appenders: ['info','console'],
			  level: 'info'
		  },
		  error: {
			  appenders: ['error','console'],
			  level: 'error'
		  }
	    }
})

// debug 的信息日志输出
exports.debug = (content) => {
	let logger = log4js.getLogger();
	logger.level = levels.debug;
	logger.debug(content)
}

// info 的信息日志输出
exports.info = (content) => {
	let logger = log4js.getLogger('info');
	logger.level = levels.info;
	logger.info(content)
}

// error 的信息日志输出
exports.error = (content) => {
	let logger = log4js.getLogger('error');
	logger.level = levels.error;
	logger.error(content)
}
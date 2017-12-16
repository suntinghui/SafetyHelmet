// http://103.43.185.166:8066/MobileOffice/
var DEFAULT_HOST = 'tobefull.com';

function getLocalStoreageHost() {
	var host = window.localStorage.getItem(SET_HOST);
	if(isNullStr(host)) {
		host = DEFAULT_HOST;
	}

	return host;
}

function getHost() {
	var host = getLocalStoreageHost();
	return 'http://' + host + '/com-manage-web/';
}

function getChannel() {
	if(mui.os.android) {
		return 'android';
	} else if(mui.os.ios) {
		return 'ios';
	}

	return 'web';
}

var SET_HOST = 'SET_HOST';

var TIMEOUT = 20000

var PAGE_SIZE = 20;
var MAX_PAGE_SIZE = 20;

// 下面是LocalStorage key
var TokenKey = "TokenKey";
var UserName = "UserName";
var AdminId = 'AdminId';
var pictureUrl = 'pictureUrl';
var Name = "Name";
var LoginRespInfo = 'LoginRespInfo'; // 因为有个人信息修改，所以干脆保存响应报文

var SaveUserName = 'SaveUserName';
var SavePwd = 'SavePwd';

var CheckSavePwd = 'CheckSavePwd';
var CheckAutoLogin = 'CheckAutoLogin';

var FIR_LINK = 'http://fir.im/u91t';

var FIR_APP_ID = '59e5b48f959d69331000009b';
var FIR_API_TOKEN = 'b466e4ea1d74d418b79837f4fd6302a8';
var FIR_CHECK_URL = 'http://api.fir.im/apps/latest/' + FIR_APP_ID + '?api_token=' + FIR_API_TOKEN;
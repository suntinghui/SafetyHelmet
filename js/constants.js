// http://103.43.185.166:8066/MobileOffice/
var DEFAULT_HOST = 'http://tobefull.com/com-manage-web/';

function getLocalStoreageHost() {
	var host = window.localStorage.getItem(SET_HOST);
	if(isNullStr(host)) {
		host = DEFAULT_HOST;
	}
	return host;
}

function getHost() {
	var host = getLocalStoreageHost();
	return host;
}

function getChannel() {
	if (mui.os.android) {
		return 'android';
	} else if (mui.os.ios) {
		return 'ios';
	}
	
	return 'web';
}

// 是否正在显示侧边栏
var	SHOWMENU = 'SHOWMENU';
// open 1为打开， 0为关闭侧边栏
function menuShow(open) {
	window.localStorage.setItem(SHOWMENU, open);
}

// 返回true表示打开状态
function menuState() {
	return (window.localStorage.getItem(SHOWMENU) == '1');
}

var SET_HOST = 'SET_HOST';

var TIMEOUT = 20000

var PAGE_SIZE = 20;
var MAX_PAGE_SIZE = 19860727;

// 下面是LocalStorage key
var TokenKey = "TokenKey";
var UserName = "UserName";
var AdminId = 'AdminId';
var Name = "Name";

var SaveUserName = 'SaveUserName';
var SavePwd = 'SavePwd';

var CheckSavePwd = 'CheckSavePwd';
var CheckAutoLogin = 'CheckAutoLogin';

var VersionName = '1.9.2';
var VersionCode = '192';

var FIR_LINK = 'https://fir.im/d6qx';

var FONT_SIZE = 'FONT_SIZE';

var HOME_ACTION_TYPE = 'HOME_ACTION_TYPE';
var HOME_ACTION_TAP = '单击';
var HOME_ACTION_DOUBLETAP = '双击';
var HOME_ACTION_LONGTAP = '长按';

// 生成左右分栏name-value的形式
function createInfoItem(name, value, className) {
	if(typeof(className) == "undefined") {
		className = '';
	}

	var div = document.createElement('div');
	div.className = "item-div";
	div.innerHTML = '<div class="item-name">' + name + '</div><div class="item-value ' + className + '">' + value + '</div>';
	return div;
}

function createDownloadItem(name, value, url, type, htmlContent) {
	var div = createInfoItem(name, value);
	div.addEventListener('tap', function() {
		openContent(url, type, htmlContent);
	}, false);
}

// 关闭页面一直到九宫格界面
function closeToMain() {
	var main_tab_home = plus.webview.getWebviewById('main_tab_home.html');
	var list = main_tab_home.children();
	for(var i = 0; i < list.length; i++) {
		list[i].hide();
	}
}

function showProgressDialog(msg) {
	mui.plusReady(function() {
		plus.nativeUI.showWaiting(msg, {
			padlock: true
		});
	});
}

function hideProgressDialog() {
	mui.plusReady(function() {
		plus.nativeUI.closeWaiting();
	})
}
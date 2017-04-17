mui.init();
mui.plusReady(function() {
	mui.oldBack = mui.back;
	var backButtonPress = 0;
	mui.back = function(event) {
		backButtonPress++;
		if(backButtonPress > 1) {
			plus.runtime.quit();
		} else {
			plus.nativeUI.toast('再按一次退出应用');
		}
		setTimeout(function() {
			backButtonPress = 0;
		}, 1000);
		return false;
	};
});
$(function() {
	//强服务单
	var catchButton = $('#catch');
	catchButton.on(
		"click",
		function() {
			window.location.href = "catch.html";
		});
	//新建服务单
	var newButton = $('#new');
	newButton.on(
		"click",
		function() {
			window.location.href = "new.html";
		});
	//我的服务单
	var myButton = $('#my');
	myButton.on(
		"click",
		function() {
			window.location.href = "my.html";
		});
	//查询服务单
	var checkButton = $('#check');
	checkButton.on(
		"click",
		function() {
			window.location.href = "check.html";
		});
	//售后结案
	var feedbackButton = $('#feedback');
	feedbackButton.on(
		"click",
		function() {
			window.location.href = "feedback.html";
		});
	//关于我们
	var aboutButton = $('#about');
	aboutButton.on(
		"click",
		function() {
			window.location.href = "about.html";
		});
})
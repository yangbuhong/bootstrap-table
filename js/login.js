

(function($, doc) {
	$.init({
		statusBarBackground: '#f7f7f7'
	});
	$.plusReady(function() {
		var state = app.getState();
		var mainPage = $.preload({
			"id": 'main',
			"url": 'main.html'
		});
		var main_loaded_flag = false;
		mainPage.addEventListener("loaded", function() {
			main_loaded_flag = true;
		});
		var toMain = function() {
			//使用定时器的原因：
			//可能执行太快，main页面loaded事件尚未触发就执行自定义事件，此时必然会失败
			var id = setInterval(function() {
				if(main_loaded_flag) {
					clearInterval(id);
					$.fire(mainPage, 'show', null);
					mainPage.show("pop-in");
				}
			}, 20);
		};
		
		if(state.token) {
			toMain();
		} 
		// close splash
		setTimeout(function() {
			//关闭 splash
			plus.navigator.closeSplashscreen();
		}, 600);
		//检查 "登录状态/锁屏状态" 结束
		var loginButton = doc.getElementById('login');
			$.enterfocus('#login-form input', function() {
			$.trigger(loginButton, 'tap');
		});

		window.addEventListener('resize', function() {
			oauthArea.style.display = document.body.clientHeight > 400 ? 'block' : 'none';
		}, false);
		//
		var backButtonPress = 0;
		$.back = function(event) {
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
}(mui, document));
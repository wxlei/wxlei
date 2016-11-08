
	function config($stateProvider,$urlRouterProvider){
			//console.log($ocLazyLoadProvider)
			$urlRouterProvider.otherwise("login");
			$stateProvider
			.state("login",{
						url:"/login",
						templateUrl:"views/login.html",
						controller:"sub",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/login.css']
								}
								])
							}
						}*/
					}) 
			.state("register",{
						url:"/register",
						templateUrl:"views/register.html",
						//controller:"register",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/register.css']
								}
								])
							}
						}*/
					}) 
				.state("home",{
						url:"/home",
						templateUrl:"./home.html",
						//controller:"home",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/home.css']
								}
								])
							}
						}*/
					}) 
				.state("user",{
						url:"/user",
						templateUrl:"views/user.html",
						//controller:"user",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/user.css','./js/user.js']
								}
								])
							}
						},*/
						/*data : {
							tittle:"user页面"
						}*/
					}) 
				.state("locat",{
						url:"/locat",
						templateUrl:"views/locat.html",
						//controller:"loact",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/loact.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"loact页面"
						}*/
					}) 
				.state("download_music",{
						url:"/download_music",
						templateUrl:"views/download_music.html",
						//controller:"download_music",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/download_music.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"download_music页面"
						}*/
					}) 
				.state("lately",{
						url:"/lately",
						templateUrl:"views/lately.html",
						//controller:"lately",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/lately.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"lately页面"
						}*/
					}) 
				.state("favorite",{
						url:"/favorite",
						templateUrl:"views/favorite.html",
						//controller:"favorite",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/favorite.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"favorite页面"
						}*/
					}) 
				.state("download_mv",{
						url:"/download_mv",
						templateUrl:"views/download_mv.html",
						//controller:"download_mv",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/download_mv.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"download_mv页面"
						}*/
					}) 
				.state("sound",{
						url:"/sound",
						templateUrl:"views/sound.html",
						//controller:"sound",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/sound.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"sound页面"
						}*/
					}) 
				.state("music",{
						url:"/music",
						templateUrl:"views/music.html",
						//controller:"music",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/music.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"music页面"
						}*/
					})
				.state("singer",{
						url:"/singer",
						templateUrl:"views/singer.html",
						//controller:"singer",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/singer.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"singer页面"
						}*/
					})
				.state("dvd",{
						url:"/dvd",
						templateUrl:"views/dvd.html",
						//controller:"dvd",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/dvd.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"dvd页面"
						}*/
					})
				.state("classify",{
						url:"/classify",
						templateUrl:"views/classify.html",
						//controller:"classify",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/classify.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"classify页面"
						}*/
					})
				.state("find",{
						url:"/find",
						templateUrl:"views/find.html",
						controller:"render"
						//controller:"find",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/find.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"find页面"
						}*/
					})
			    .state("config",{
						url:"/config",
						templateUrl:"views/config.html",
						//controller:"config",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/config.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"config页面"
						}*/
					})
			    .state("search",{
						url:"/search",
						templateUrl:"views/search.html",
						//controller:"search",
						/*resolve :　{
							loadPlugin: function($ocLazyLoad){
								return $ocLazyLoad.load([
								{
									files:['./css/search.css']
								}
								])
							}
						},*/
						/*data : {
							tittle:"search页面"
						}*/
					})
			    .state("play",{
						url:"/play",
						templateUrl:"views/play.html",
						//controller:"play",
						// resolve :　{
						// 	loadPlugin: function($ocLazyLoad){
						// 		return $ocLazyLoad.load([
						// 		{
						// 			files:['./css/play.css']
						// 		}
						// 		])
						// 	}
						// },
						/*data : {
							tittle:"play页面"
						}*/
					})
	}
	angular.module('myapp')
		   .config(config)

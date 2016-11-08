function fontSize(){
	return{
		link:function(scope,element){
			var fontS = document.documentElement.clientWidth/7.5
			document.documentElement.style.fontSize=fontS+"px";
		}
	}
	
}
function isUser(){
	return{
		link:function(scope,element){
			var user = new IScroll('#useres',{
				click:true
			});
		}
	}
	
}
function isMusic(){
	return{
		link:function(scope,element){
			var music = new IScroll('#music',{
				click:true
			});
			var swiper = new Swiper('.swiper-container',{
				pagination: '.swiper-pagination' , 
				paginationClickable:true, 
				autoplay:3000,
				autoplayDisableOnInteraction:false 
			})
			var Width = $("#sad").width();
					// console.log(Width)
				$("#resnav").on("tap","li",function(){
					var index = $(this).index();
					// console.log(index);
					var Wid = $("#banner").width()*index+'px';
						// console.log(Wid)
					$(this).addClass("on").siblings().removeClass("on");
					$("#sad").css({"left":index*Width,'-webkit-transition':'left .5s'})

			$("#count").css({'-webkit-transform':'translateX(-'+Wid+')','-webkit-transition':'all .5s'})

			})
		}
	}
	
		
}
function isFind(){
	return{
		link:function(scope,element){
			var find = new IScroll('#find', {
				click:true
			})
		}
	}
	
	
}
function isSinger(){
	return{
		link:function(scope,element){
			var singer = new IScroll('#singer', {
				click:true
			})
		}
	}
	
	
}
function isDvd(){
	return{
		link:function(scope,element){
			var swiper = new Swiper('.swiper-container',{
				pagination: '.swiper-pagination' , 
				paginationClickable:true, 
				autoplay:3000,
				autoplayDisableOnInteraction:false 
			})
			$("#dvd_resnav").on("tap","li",function(){
			var index = $(this).index();
			// console.log(index);
			var Width = $("#dvd_sad").width();
			var Wid = $("#banner").width()*index+'px';
				 console.log(Wid)
			$(this).addClass("on").siblings().removeClass("on");
			$("#dvd_sad").css({"left":index*Width,'-webkit-transition':'left .5s'})
			$(".boxs").css({'-webkit-transform':'translateX(-'+Wid+')','-webkit-transition':'all .5s'})

		})
		}

	}
}

function isPlay(){
	return{
		link:function(scope,element){
			var play = new IScroll('#play_count', {
				click:true
			})
		}
	}
	
	
}


angular.module('myapp')
	   .directive('fontSize',fontSize)
	   .directive('isUser',isUser)	
	   .directive('isMusic',isMusic)
	   .directive('isFind',isFind)
	   .directive('isSinger',isSinger)
	   .directive('isDvd',isDvd)
	   .directive('isPlay',isPlay)
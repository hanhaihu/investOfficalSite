$(function(){
	$(window).resize(function() {
		moveRe();
	});
	
	function moveRe(){
		var winH = $(window).height()
		var mainH = $("body").height();
		if(mainH < winH){
			$(".footer").css({
				position:"fixed",
				_position:"absolute",
				bottom:"0",
				left:"0",
				maxHeight:"1200px",
				width:"100%"
			})
		}else{
			$(".footer").css({
				position:"static",
				_position:"static",
				maxHeight:"1200px",
				width:"100%"
			})
		}
	}
	
	
	moveRe();
})


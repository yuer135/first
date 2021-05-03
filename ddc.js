$('.ddc').click(function(){
		is_login=window.localStorage.getItem("is_login");
		if(is_login==1){
			$('.dingdan').css('display','block');
			$('.zhelan').css('display','block');
		} else {
			alert('璇风櫥褰曞悗鎿嶄綔!');
		}
	})
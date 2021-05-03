$('input[type=radio][name=girls]').change(function() {
				jg=$(this).attr('dateval');
				$('.juan_juanEr_kami').html('闈㈠€�: 100鍏冿紝鍞环: '+jg+'鍏�');
				sl=$(this).val()/10;
				$('.zhong').html(sl*jg+'鍏�');
				yl=sl*100-sl*jg-sl*1.8;
				$('.xia').html(yl+'鍏�');
			});
$('.jixus').click(function(){
			is_login=window.localStorage.getItem("is_login");
			if(is_login==1){
				var dj=$( "input[name='girls']:checked").attr('dateval');
				if(dj==88){
					all=parseInt(88*10/6.6);
				} else if(dj==86){
					all=parseInt(86*20/6.6);
				} else if(dj==84){
					all=parseInt(84*30/6.6);
				} else if(dj==82){
					all=parseInt(82*50/6.6);
				} else {
					alert('璇烽€夋嫨鏁伴噺!');
					return;
				}
				$('#jine').html(all)
				$('.chongzhi').css('display','block');
				$('.zhelan').css('display','block');
			}else {
				alert('璇风櫥闄嗗悗鎿嶄綔!');
			}
		})
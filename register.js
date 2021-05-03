     createCode(4);    

//鐢熸垚楠岃瘉鐮佺殑鏂规硶
function createCode(length) {
	var code = "";
	var codeLength = parseInt(length); //楠岃瘉鐮佺殑闀垮害
	var checkCode = document.getElementById("checkCode");
	////鎵€鏈夊€欓€夌粍鎴愰獙璇佺爜鐨勫瓧绗︼紝褰撶劧涔熷彲浠ョ敤涓枃鐨�
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
	//寰幆缁勬垚楠岃瘉鐮佺殑瀛楃涓�
	for (var i = 0; i < codeLength; i++)
	{
		//鑾峰彇闅忔満楠岃瘉鐮佷笅鏍�
		var charNum = Math.floor(Math.random() * 62);
		//缁勫悎鎴愭寚瀹氬瓧绗﹂獙璇佺爜
		code += codeChars[charNum];
	}
	if (checkCode)
	{
		//涓洪獙璇佺爜鍖哄煙娣诲姞鏍峰紡鍚�
		checkCode.className = "code";
		//灏嗙敓鎴愰獙璇佺爜璧嬪€煎埌鏄剧ず鍖�
		checkCode.innerHTML = code;
	}
}
    
//妫€鏌ラ獙璇佺爜鏄惁姝ｇ‘
function validateCode()
{
	//鑾峰彇鏄剧ず鍖虹敓鎴愮殑楠岃瘉鐮�
	var checkCode = document.getElementById("checkCode").innerHTML;
	//鑾峰彇杈撳叆鐨勯獙璇佺爜
	var inputCode = document.getElementById("inputCode").value;
	//console.log(checkCode);
	//console.log(inputCode);
	if (inputCode.length <= 0)
	{
		return 2
	}
	else if (inputCode.toUpperCase() != checkCode.toUpperCase())
	{
		return 2
	} else {
		return 1
	}    
}
$('.zhudengs').click(function(){
	cc=validateCode()
	if(cc==2){
		alert('楠岃瘉鐮侀敊璇�');
		return;
	}
	ss=$('.zhuce .tapLogin_username .zhuyou').val();
	if(ss==''){
		alert('鐢ㄦ埛鍚嶄笉鑳戒负绌�');
		return;	
	}
	//window.localStorage.setItem("zhuyou",ss);
	aa=$('.zhuce .tapLogin_password .zhumi').val();
	if(aa==''){
		alert('瀵嗙爜涓嶈兘涓虹┖');
		return;		
	}	
	//window.localStorage.setItem("zhumi",aa);
	$.ajax({
		type: "POST",
		url: "login.php?action=register",
		data: {username:ss, password:aa},
		dataType:"json",
		success: function(data){
			if(data.status==1){
				alert('娉ㄥ唽鎴愬姛');
				$('.zhuce').css('display','none');
				$('.zhelan').css('display','none');
				$('.login').click();			
			} else {
				alert(data.msg)
			}
		}
	})
})
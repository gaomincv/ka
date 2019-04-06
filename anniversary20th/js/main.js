
var type="";
var txtArray="";
var mobile="";
var acty=""	;
$(document).ready(function(){
	$.ajax({
	url:"../main-json/main.json",
	dataType:"json", 
	success:function(res){
		if(res.code=="200"){
			 type=res.type;
		   txtArray=res.textArray;
              mobile=res.number;
              acty=res.activity;
              //console.log(acty)
              mobile=mobile.substr(0,3)+"*****"+mobile.substr(7);
        $(".mset1").append(" <p class='fb fs25rem blue1 pt5 pb5'>"+mobile+"您当前号码可参与的活动档次为：</p>")
		if(type=="3"){
    		$(".pt5").after("<div class='item gray' value='3' type='3'> <p class='txt1 blue1'>"+  txtArray[0].text1+"</p> <p class='txt2'>"+txtArray[0].ad+"</p>  </div>").after("<div class='item gray' value='2' type='2'> <p class='txt1 blue1'>"+txtArray[1].text1+"</p> <p class='txt2'>"+txtArray[1].ad+"</p></div>").after("<div class='item' value='1' type='1'> <p class='txt1 blue1'>"+txtArray[2].text1+"</p> <p class='txt2'>"+txtArray[2].ad+"</p>  </div>") 
		}else if(type="2"){
			$(".pt5").after("<div class='item gray' value='3' type='3'> <p class='txt1 blue1'>"+  txtArray[0].text1+"</p> <p class='txt2'>"+txtArray[0].ad+"</p>  </div>").ater("<div class='item gray' value='2' type='2'> <p class='txt1 blue1'>"+txtArray[1].text1+"</p> <p class='txt2'>"+txtArray[1].ad+"</p></div>")
		}else{
          $(".pt5").after("<div class='item gray' value='3' type='3'> <p class='txt1 blue1'>"+  txtArray[0].text1+"</p> <p class='txt2'>"+txtArray[0].ad+"</p>  </div>")
  
		} 
		}

$(".mset1 > .item").click(function(e) {
	$(this).removeClass("gray").siblings().addClass("gray");
	$(this).addClass("pitch").siblings().removeClass("pitch");
});

	}

})
$(".btnT1").click(function(){
	var pitchlevel =  type;
	if(!pitchlevel){
		///showW1('#cover2','#xx4_popmsg');
		return false;
	}else{
		if(acty=="2"){
            $("#cover2").show();
		    $("#xx4_pop11").show();
		}else if(acty=="3"){
              $("#cover2").show();
              $("#xx4_pop07").show();

		}else if(acty=="1"){
			$("#cover2").show();
            $("#xx4_pop13").show();
		}
		
	}
	
	//window.location.href='${pageContext.request.contextPath}/20thAnniversary/toblxz.do?pitchlevel=' + pitchlevel;	
})
;

$(".btnT2").click(function(){
	window.location.href='${pageContext.request.contextPath}/20thAnniversary/tohdgz.do';
})
$(".know").click(function(){
	//$("#cover2").show();
	//$("#cover2").css("display","none");
    $("#xx4_pop11").hide();
    $("#xx4_pop13").show()
     window.href="http://baidu.com"

})
})		
	

<%@page contentType="text/html;charset=GBK"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="fun" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page import="java.math.BigDecimal" %>
<%@ page import="com.sinovatech.common.dto.UserInfoDTO" %>
<%@ page import="com.sinovatech.common.util.Constants" %>
<%
	UserInfoDTO userInfoDTO = (UserInfoDTO)request.getSession().getAttribute(Constants.USER_SESSION);
	String serial_number = "";
	if (userInfoDTO != null) {
		serial_number = userInfoDTO.getSerial_number();
	}
%>
<!doctype html>
<html class="fh">
<head>
<title>海南移动20周年感恩有你</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,minimum-scale=1, maximum-scale=1, user-scalable=no" />
<Meta name="WT.branch" content="hn">
<%if(serial_number != null){ %>
<Meta name="WT.mobile" content="<%=serial_number%>">
<%} %>
<Meta name="WT.prov" content="898">
<Meta name="WT.city" content="898">
<Meta name="WT.mc_ev" content="201920thCFSF_898">
<link href="${pageContext.request.contextPath}/anniversary20th/css/frame.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/js/yhcode.js"></script>
<script src="http://app.10086.cn/appother/js/public/leadeon.js"></script>
<script type="text/javascript">
	try{
		setTimeout(function(){
			var ua = navigator.userAgent.toLowerCase();
			if (ua.match(/leadeon/i) == "leadeon") {
				var platMeta = document.createElement('meta');
				platMeta.setAttribute('name',"WT.plat");
				platMeta.setAttribute('content',"AppH5_hn");
				document.getElementsByTagName('head')[0].appendChild(platMeta);
				leadeon.getUserInfo({
		            debug: false,
		            success: function(res) {
		            	var cidMeta = document.createElement('meta');
		            	cidMeta.setAttribute('name',"WT.cid");
		            	cidMeta.setAttribute('content',res.cid);
		            	document.getElementsByTagName('head')[0].appendChild(cidMeta);
		            	
		    			var mobileMeta = document.createElement('meta');
		    			mobileMeta.setAttribute('name',"WT.mobile");
		    			mobileMeta.setAttribute('content',res.phoneNumber);
		    			document.getElementsByTagName('head')[0].appendChild(mobileMeta);
		    			
		    			var versionMeta = document.createElement('meta');
		    			versionMeta.setAttribute('name',"WT.av");
		    			versionMeta.setAttribute('content',res.version); 
		    			document.getElementsByTagName('head')[0].appendChild(versionMeta);
		    			
		    			var script=document.createElement("script"); 
		    			script.setAttribute("type", "text/javascript"); 
		    			script.setAttribute("src", "${pageContext.request.contextPath}/sjb/hn_sdc.js"); 
		    			document.getElementsByTagName('head')[0].appendChild(script);
		           },
		           error: function(res) {}
			    });                       
			}else{
				var platMeta = document.createElement('meta');
				platMeta.setAttribute('name',"WT.plat");
				platMeta.setAttribute('content',"PCH5_hn");
				document.getElementsByTagName('head')[0].appendChild(platMeta);
				
				<%if(serial_number != null){ %>
				var mobileMeta = document.createElement('meta');
				mobileMeta.setAttribute('name',"WT.mobile");
				mobileMeta.setAttribute('content',"<%=serial_number%>");
				document.getElementsByTagName('head')[0].appendChild(mobileMeta);
				<%} %>
				
				var script=document.createElement("script"); 
				script.setAttribute("type", "text/javascript"); 
				script.setAttribute("src", "${pageContext.request.contextPath}/sjb/hn_sdc.js");
				document.getElementsByTagName('head')[0].appendChild(script);
			}
			
		}, 400);
		
		setTimeout(function(){
			Webtrends.multiTrack({argsa:['WT.si_n','20thCFSF','WT.si_x','1']});
			_yhcode.dTrack('YH.si_n','20thCFSF','YH.si_x','1');
		}, 800);
	}catch(ce){alert(ce)};
</script>
</head>
<body class="bg1">
<div class="flex flexVM hei100">
	<p class="logo"></p>
	<div class="txtR mainP1"><img src="${pageContext.request.contextPath}/anniversary20th/images/icon20u.png" class="icon20u" /></div>
	<div class="flex1 flex flexVM">
		<img src="${pageContext.request.contextPath}/anniversary20th/images/picSlogan.png" class="scale"/>
	</div>
	<div class="pl20 pr20 ml10 mr10">
		<div class="mset1">
			<p class="fb fs25rem blue1 pt5 pb5">${mobile }您当前号码可参与的活动档次为：</p>
			<c:choose>
				<c:when test="${level eq 1 }">
					<div class="item pitch" value="1" type="1">
						<p class="txt1 blue1">预存100元话费送100元话费</p>
						<p class="txt2">注：预存话费一次到账，赠送话费分5个月返还，每月20元。</p>
					</div>
				</c:when>
				<c:when test="${level eq 2 }">
					<div class="item gray" value="1" type="1">
						<p class="txt1 blue1">预存100元话费送100元话费</p>
						<p class="txt2">注：预存话费一次到账，赠送话费分5个月返还，每月20元。</p>
					</div>
					<div class="item pitch" value="2" type="2">
						<p class="txt1 blue1">预存200元话费送200元话费</p>
						<p class="txt2">注：预存话费一次到账，赠送话费分5个月返还，每月40元。</p>
					</div>
				</c:when>
				<c:when test="${level eq 3 }">
					<div class="item gray" value="1" type="1">
						<p class="txt1 blue1">预存100元话费送100元话费</p>
						<p class="txt2">注：预存话费一次到账，赠送话费分5个月返还，每月20元。</p>
					</div>
					<div class="item gray" value="2" type="2">
						<p class="txt1 blue1">预存200元话费送200元话费</p>
						<p class="txt2">注：预存话费一次到账，赠送话费分5个月返还，每月40元。</p>
					</div>
					<div class="item pitch" value="3" type="3">
						<p class="txt1 blue1">预存300元话费送300元话费</p>
						<p class="txt2">注：预存话费一次到账，赠送话费分5个月返还，每月60元。</p>
					</div>
				</c:when>
			</c:choose>
		</div>
	</div>
	<div class="flex1 flex flexVM">
		<a href="javascript:;" onclick="toblxz();" class="btnT1">马上参与</a>
		<p class="p10"><a href="javascript:;" onclick="tohdgz();" class="btnT2 mr20 ml20">活动规则</a></p>
	</div>
</div>


<!--提示层-->
<div id="cover"></div>
<div id="cover2"></div>

<!-- msg 未满足参与条件弹窗 -->
<div id="xx4_popmsg" class="xx4_pop">
	<p class="bg"></p>
	<div class="xx4_pop_cont">
		<p class="iconClose" onclick="hideW1('#cover2','#xx4_popmsg');">×</p>
		<p class="mt10 fb fs30rem mtxt1">嗷了个嗷~<br>请选择参与活动档次</p>
		<p class="p10"><a href="javascript:;" onclick="tohdgz();" class="btnT2 c2 mr20 ml20">活动规则</a></p>
	</div>
</div>

<!--提示层结束-->

<script type="text/javascript" src="${pageContext.request.contextPath}/anniversary20th/js/jquery-3.3.1.min.js"></script>	
<script type="text/javascript" src="${pageContext.request.contextPath}/anniversary20th/js/public.js"></script>
<script>
//选择切换
$(".mset1>.item").click(function(e) {
	$(this).removeClass("gray").siblings().addClass("gray");
	$(this).addClass("pitch").siblings().removeClass("pitch");
});

function toblxz(){
	var pitchlevel = $(".item.pitch").attr('type');
	if(!pitchlevel){
		showW1('#cover2','#xx4_popmsg');
		return false;
	}
	window.location.href='${pageContext.request.contextPath}/20thAnniversary/toblxz.do?pitchlevel=' + pitchlevel;
}

function tohdgz(){
	window.location.href='${pageContext.request.contextPath}/20thAnniversary/tohdgz.do';
}
</script>
</body>
</html>

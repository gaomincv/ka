/**
 * JavaScript 检查库
 * 第一类 检查并返回检查结果(true or false)
 * a-1. ifDigit(str,allowNull)  是否为合法非负整数(examples/ifDigit.html)
 * a-2. ifLetter(str,allowNull) 是否为英文字母
 * a-3. ifDay(str,allowNull)    是否为天数
 * a-4. ifMonth(str,allowNull)  是否为月份
 * a-5. ifYear(str,allowNull)   是否为年份
 * a-6. ifDate(String,allowNull)   是否为日期
 * a-7. ifEmail(String,allowNull)  是否为邮件地址
 * a-8. ifPhone(String,allowNull)  是否为电话号码
 * a-9. ifGBK(String,allowNull)    是否为中文字符
 * a-10.ifMoney(String,allowNull)  是否为合法货币数字
 * a-11 ifMoenyRange(String,int,int,allowNull) 判断字符串是否为合法钱数,且是否超过限定范围
 * a-12. checkMonthLength(mm, dd, yyyy) 判断是否为合法日期
 * a-13. getSelectedButton(buttonGroup) 判断buttongroup为名的一组radio中有无被选中的项

 * 第二类 检查后直接报错
 * b-1. isDigit(Object,allowNull)	 是否为数字
 * b-2. isLetter(Object,allowNull) 是否为字母
 * b-3. isDay(Object,allowNull)    是否为天数
 * b-4. isMonth(Object,allowNull)  是否为月份
 * b-5. isYear(Object,allowNull)   是否为年份
 * b-6. isDate(Object,allowNull)   是否为日期
 * b-7. isEmail(Object,allowNull)  是否为邮件地址
 * b-8. isPhone(Object,allowNull)  是否为电话号码
 * b-9. isGBK(Object,allowNull,msgname)    是否为中文字符(必须不能是中文)
 * b-10. isMoney(Object,allowNull)  是否为合法货币数字
 * b-11. isMoneyRange(obj,minValue,maxValue,allowNull)	判断是否合法钱数且是否超过限定额度
 * b-12. checkLeng(Object, min, max,allowNull) 字符串长度是否在指定长度范围内
 * b-13.1 checkValidDate(yyObject,mmObject,ddObject,allowNull)	对日期进行全面的检查
 * b-13.2 checkValidDateRange(yyObject1,mmObject1,ddObject1,allowNull1,yyObject2,mmObject2,ddObject2,allowNull2)
 *		检查起始日期及截止日期
 * b-15. showMsg(String, Object)  显示提示信息String,光标焦点落在Object上,返回false
 * b-16. isMobile(Object,allowNull)  是否为手机号码
 * b-17. checkGBK(Object,allowNull,msgname)    是否为中文字符(必须是中文)
 * b-18 isPhone(Object,allowNull,msgname) 是否为固定电话号码
 * b-19 isMobile(obj,allwoNull,msgname))是否为手机号码
 * b-20 isEmail(Object,allwoNull,msgname)是否为邮件地址
 * b-21  checkCompareDate(objbegintime,objendtime,msgbeginname,msgendname,ischecknow) 比较开始时间和结束时间
 * 第三类 功能函数，并不报错
 * c-1. getLength(String)  获取字符长度（每个中文字符为2个字符）
 * c-2. trim(String)  去掉字符串前后的空格并返回
 * c-3. textsTrim(formname)	将form中所有的text文本进行trim操作。

 */

//身份证校验
function isIdCardNo(num) {
	var len = num.length, re;
	if (len == 15) {
		if (isNaN(num)) {
			alert("输入的身份证不是数字！");
			return false;
		}
		re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/);
	} else if (len == 18) {
		if (isNaN(num.substring(0,17))) {
			alert("输入的身份证不是数字！");
			return false;
		}
		re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\d)$/);
	} else {
		alert("输入的身份证长度不正确！");
		return false;
	}
	var a = num.match(re);
	if (a != null) {
		if (len==15) {
			var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]);
			var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5];
		} else {
			var D = new Date(a[3]+"/"+a[4]+"/"+a[5]);
			var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5];
		}
		if (!B) {alert("输入的身份证号: "+ a[0] +" 中的出生日期不对！"); return false;}
	}
	return true;
}

//计算两个时间差
function compute(start_date,end_date) {
	var str1 = start_date.split(" ");
	var arr1 = str1[0].split("-");
 	var date1 = new Date(arr1[0],arr1[1],arr1[2]);
	var str2 = end_date.split(" ");
	var arr2 = str2[0].split("-");
 	var date2 = new Date(arr2[0],arr2[1],arr2[2]);
            
	var startDate = new Date(date1);
	var endDate= new Date(date2);

	var df = (endDate.getTime()-startDate.getTime())/(24*60*60*1000);
	return df;
}

//计算字符串长度，中文字符当两个字节算
function getStringLength(str) {
	var len = 0;
	for (i=0; i<str.length; i++) {
		if (str.charCodeAt(i)>255) len+=2; else len++;
		//if (str.charCodeAt(i)-128<0) len+=2; else len++;
	}
	return len;
}

//日期格式化
Date.prototype.format = function(formatter) {
	if (!formatter || formatter == "") {
		formatter = "yyyy-MM-dd";
	}

	var o = {
		//"y+" : this.getYear().toString(), //年
		"q+" : Math.floor((this.getMonth()+3)/3), //季度
		"M+" : this.getMonth()+1, //月
		"d+" : this.getDate(), //日
		"h+" : this.getHours(), //时
		"m+" : this.getMinutes(), //分
		"s+" : this.getSeconds(), //秒
		"S" : this.getMilliseconds() //毫秒
	}

	if (/(y+)/.test(formatter)) {
		formatter = formatter.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(formatter)) {
			formatter = formatter.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return formatter;
}

//取得某个月的最大天数
function getMaxDay(year,month) {
	if (month==4||month==6||month==9||month==11) return "30";
	if (month==2)
		if (year%4==0 && year%100!=0 || year%400==0) return "29";
	else
		return "28";
	return "31";
}

//时间的比较
//参数   日期格式的两个字符串
//返回值   0:等于   ，1:大于，   -1小于
function dateCompare(str, str1) {
	if (str=="" && str1!="") return -1;
	if (str1=="" && str!="") return 1;
	if (str=="" && str1=="") return 0;
	var re = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
	var r = str.match(re);
	var d = new Date(r[1],r[2]-1,r[3]);
	d.getFullYear() == r[1]&&d.getMonth() == r[2]-1&&d.getMonth() == r[3];
	r = str1.match(re);
	var e = new Date(r[1],r[2]-1,r[3]);
	e.getFullYear() == r[1]&&d.getMonth() == r[2]-1&&d.getMonth() == r[3];
	if (d<e) return -1;
	if (d>e) return 1;
	if (d=e) return 0;
}

function checkValidStr(name){
    for (i = 0; i < name.length; i++) {
		 if (name.charAt(i) == '$'
			 || name.charAt(i) == '!'
			 || name.charAt(i) == '~'
			 || name.charAt(i) == '`'
			 || name.charAt(i) == '?'
			 || name.charAt(i) == '='
			 || name.charAt(i) == '/'
			 || name.charAt(i) == '|'
			 || name.charAt(i) == '+'
			 || name.charAt(i) == '#'
			 || name.charAt(i) == '%'
			 || name.charAt(i) == '^'
			 || name.charAt(i) == '\''
			 || name.charAt(i) == ';'
			 || name.charAt(i) == '{'
			 || name.charAt(i) == '}'
			 || name.charAt(i) == ']'
			 || name.charAt(i) == '['
			 || name.charAt(i) == ')'
			 || name.charAt(i) == '('
			 || name.charAt(i) == '<'
			 || name.charAt(i) == '>'
			 || name.charAt(i) == '&'
			 || name.charAt(i) == ' '
			 || name.charAt(i) == '"')
		  return false;
		}
		return true;
}

//建立者:任勇
//判断字符串是否为合法非负整数
// a-1 ifDigit(str,allowNull)
function ifDigit(str,allowNull)
{
	slen=str.length;
	if(slen==0) return allowNull;
	for (i=0; i<slen; i++){
		cc = str.charAt(i);
		if (cc <"0" || cc >"9")
		{
			return false;
		}
	}
	return true;
}

//建立者:任勇
//功能:判断字符串是否都是英文字母
// a-2 ifLetter(str,allowNull)
function ifLetter(str,allowNull ){	
	slen=getLength(str);
	if (slen==0) return allowNull;
		
	str = str.toUpperCase();
	for ( var i = 0 ; i < slen; i ++ ){
		if ( str.charAt(i) < "A" || str.charAt(i) > "Z" )
			return false;
	}
	return true;
}

// a-3 ifDay(str,allowNull)
function ifDay(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;
	if (!ifDigit(str,allowNull))
	{
		return false;
	}
	if (str < "01" || str > "31")
	{
		return false;
	}
	return true;
}

// a-4 ifMonth(str,allowNull)
function ifMonth(str,allowNull)
{	
	slen=getLength(str);
	if (slen==0) return allowNull;
	
	if (!ifDigit(str,allowNull))
	{
		return false;
	}
	if (str >="1" && str<="9" && slen==1) return true;
	if (str >="01" && str <="12") return true;
	return false;
}

// a-5 ifYear(str,allowNull)
function ifYear(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;

	if (!ifDigit(str,allowNull))
	{
		return false;
	}
	if (str < "1800" || slen < 4)
	{
		return false;
	}
	return true;
}

// a-6 ifDate(str,allowNull)
function ifDate(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;
	if (!ifDigit(str,allowNull))
	{
		return false;
	}
	else if (slen < 8)
	{
		return false;
	}
	cc = str.substr(0,4);
	if (cc < "1800")
	{
		return false;
	}
	cc = str.substr(4,2);
	if (cc < "01" || cc > "12")
	{
		return false;
	}
	cc = str.substr(6,2);
	if (cc < "01" || cc > "31")
	{
		return false;
	}
	return true;
}

//建立者:任勇
//判断字符串是否为合法邮件地址
// a-7 ifEmail(str,allowNull)
function ifEmail(str,allowNull)
{
	if(str.length==0) return allowNull;
	i=str.indexOf("@");
	j=str.lastIndexOf(".");
	if (i == -1 || j == -1 || i > j)
	{
		return false;
	}
	return true;
}

// a-8 ifPhone(str,allowNull)
function ifPhone(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;
	for (i=0; i<slen; i++){
		cc = str.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return false;
		}
	}
	return true;
}

// a-9 ifGBK(str,allowNull)
function ifGBK(str,allowNull)
{
	slen=getLength(str);
	if (slen==0) return allowNull;
	for (i=0; i<slen; i++){
		cc = str.charAt(i);
		cc = escape(cc);
		if (cc.indexOf("%u") >= 0)
		{
			return false;
		}
	}
	return true;
}

//建立者:任勇
//判断字符串是否为合法钱数
// a-10 ifMoeny(String)
function ifMoney(str,allowNull){

	if (str.length==0) return allowNull;

	if ( ( pos = str.indexOf( "." ) ) != -1 ){
	   if (str.length==1)
	     return false;
	     
	   if ( ( pos = str.indexOf(".", pos + 1) )  != -1 )
	     return false;
	}

	for ( var i = 0 ; i < str.length; i ++ ){
	  if (( str.charAt(i) < "0" || str.charAt(i) > "9" )&&(str.charAt(i)!="."))
	    return false;
	}
	
	return true;
}

//建立者:任勇
//判断字符串是否为合法钱数,且是否超过限定范围
// a-11 ifMoneyRange(str,minValue,maxValue,allowNull)
function ifMoneyRange(str,minValue,maxValue,allowNull)
{
	if (str.length==0) return allowNull;
	
	if(!ifMoney(str))
		return false;
	
	if(parseFloat(str)>=maxValue)
		return false;
	if(parseFloat(str)<minValue)
		return false;
	return true;
}

//建立者:任勇
//判断是否为合法日期
// a-12 checkMonthLength(mm, dd, yyyy)
function checkMonthLength(mm,dd,yyyy){
    if((mm==4||mm==6||mm==9||mm==11) && dd>30){
      return false;
    }else if(mm==2){
      if(yyyy % 4 >0 && dd>28){
        return false;
      }else if(dd>29){
        return false;
      }
    }else if(dd>31){
      return false;
    }
    return true;  
}

//建立者:任勇
//判断buttongroup为名的一组radio中有无被选中的项
// a-13 getSelectButton(buttonGroup)
function getSelectedButton(buttonGroup){
  	for (var i=0;i<buttonGroup.length;i++){
  		if (buttonGroup[i].checked) return true;
  	}
  	return false;
}


//建立者:默认
//功能: 检查是否为数字
//示例: isDigit(String,allowNull)
//输入参数: 需要检查的表单对象名称
//输出参数: true或出错信息
// b-1.1 isDigit(Object,allowNull)
function isDigit(obj,allowNull,msgname)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须填写" + msgname + "！",obj);
		return true;
	}
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if(!(cc == '.')){
			if (cc <"0" || cc >"9") return showMsg(msgname + "必须为数字！",obj);
	        }
	}
	
	return true;
}

//建立者:任勇
//功能: 检查是否为数字
//示例: isDigitMaxlength(String obj,int length,boolean allowNull)
//输入参数: 需要检查的表单对象名称,允许的最大长度
//输出参数: true或出错信息
// b-1.2 isDigitMaxlength(Object,maxlength,allowNull)
function isDigitMaxlength(obj,maxlength,allowNull)
{
	
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入一个长度不超过"+maxlength+"的整数！",obj);
		return true;
	}
	if(slen>maxlength) return showMsg("长度最大为"+maxlength+"！",obj);
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if (cc <"0" || cc >"9")
		{
			return showMsg("必须为整数！",obj);
		}
	}
	return true;
}

//建立者:任勇
//功能:判断字符串是否都是字母
// b-2 isLetter(Object,allowNull)
function isLetter(obj,allowNull){
	obj.value=trim(obj.value);
	str = obj.value;
	slen=getLength(obj.value);
	if ( slen == 0 ){
		if(!allowNull) return showMsg("必须输入！",obj);
		return true;
	}
	str = str.toUpperCase();
	for ( var i = 0 ; i < slen; i ++ ){
		if ( str.charAt(i) < "A" || str.charAt(i) > "Z" )
			return showMsg("必须都是英文字母！",obj);
	}
	return true;
}

// b-3 isDay(Object,allowNull)
function isDay(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}
	if (!ifDigit(obj.value))
	{
		return false;
	}
	if (obj.value < "01" || obj.value > "31")
	{
		return showMsg("日格式有误，正确的格式为：DD,如:02",obj);
	}
	return true;
}

// b-4 isMoneth(Object,allowNull)
function isMonth(obj,allowNull)
{	
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}
	if (!ifDigit(obj.value))
	{
		return false;
	}
	if (obj.value < "01" || obj.value > "12")
	{
		return showMsg("月份格式有误，正确的格式为：MM,如:01",obj);
	}
}

//建立者：默认
//功能：检查是否合法年份
//示例：isYear(Object)
//输入参数：被检查字符串
//输出参数：true 或 错误信息
// b-5 isYear(Object)
function isYear(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}
	slen=obj.value.length;
	if (!ifDigit(obj.value))
	{
		return showMsg("日期有误，不能含有非数字的字符！",obj);
	}
	if (obj.value < "1800" || slen < 4)
	{
		return showMsg("年份格式有误，正确的格式为：YYYY,如:1999",obj);
	}
}

//建立者：默认
//功能：检查是否合法日期
//示例：isDate(Object)
//输入参数：被检查字符串
//输出参数：true 或 错误信息
// b-6 isDate(Object)
function isDate(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}
	
	slen=obj.value.length;
	if (!ifDigit(obj.value))
	{
		return showMsg("日期有误，不能含有非数字的字符！",obj);
	}
	else if (slen < 8)
	{
		return showMsg("日期格式有误，正确的格式为：YYYYMMDD,如:19990102",obj);
	}
	cc = obj.value.substr(0,4);
	if (cc < "1800")
	{
		return showMsg("年份格式有误，正确的格式为：YYYY,如:1999",obj);
	}
	cc = obj.value.substr(4,2);
	if (cc < "01" || cc > "12")
	{
		return showMsg("月份格式有误，正确的格式为：MM,如:01",obj);
	}
	cc = obj.value.substr(6,2);
	if (cc < "01" || cc > "31")
	{
		return showMsg("日格式有误，正确的格式为：DD,如:02",obj);
	}
	return true;
}

// b-7 isEmail(Object)
function isEmail(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull)
			return showMsg("必须输入！",obj);
		return true;
	}

	i=obj.value.indexOf("@");
	j=obj.value.lastIndexOf(".");
	// if (! ifGBK(obj)) i = -1;
	if (i == -1 || j == -1 || i > j)
	{
		return showMsg("电子邮件书写有误！",obj);
	}
	return true;
}

// b-8 isPhone(Object)
function isPhone(obj,allwoNull)
{

	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allwoNull){
			return showMsg("必须输入！",obj);
		}
		return true;
	}
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return showMsg("电话号码含有非法字符！",obj);
		}
	}
	return true;
}

// b-9 isGBK(Object,allowNull,msgname)
function isGBK(obj,allowNull,msgname)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入" + msgname + "！",obj);
		return true;
	}

	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		cc = escape(cc);
		if (cc.indexOf("%u") >= 0)
		{
			return showMsg( msgname + " 不能为汉字！",obj);
		}
	}
	return true;
}

//建立者:任勇
//判断字符串是否为合法钱数
// b-10 isMoney(Object,allowNull)
function isMoney(obj,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}

	if (ifMoney(obj.value))
	{
		return true;
	}
	else
	{
		return showMsg("不是合法的货币数！",obj);
	}	
	return true;
}

//建立者:任勇
//判断是否合法钱数且是否超过限定额度
//b-11 isMoneyRange(obj,minValue,maxValue)
function isMoneyRange(obj,minValue,maxValue,allowNull)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入！",obj);
		return true;
	}

	obj.value=trim(obj.value);
	if(obj.value=="") return true;
	
	if(!ifMoney(obj.value))
		return shoMsg("不是合法的货币数！",obj);
	
	if(parseFloat(obj.value)>=maxValue)
		return showMsg("货币值过大！",obj);
	if(parseFloat(obj.value)<minValue)
		return showMsg("货币值过小！",obj);
	return true;
}

//建立者:华炼
//功能: 检查字段长度是否在指定范围内
//示例: chekLeng(form1.t1, 4,10)
//输入参数: 需要检查的表单对象名称，最小长度，最大长度
//输出参数: true
// b-12 checkLeng(obj, min, max,allowNull)
function checkLeng(obj, min, max,allowNull , msgname )
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入" + msgname + "！",obj);
		return true;
	}

	if (slen < min)
	{
		return showMsg("请最少输入 " + min + " 个字符！",obj);

	}
	if (slen > max)
	{
		return showMsg(msgname + "请最多输入 " + max + " 个英文字符或"+max/2+"个中文字符！",obj);

	}
	return true;
}



//建立者:任勇
//功能:对日期进行全面的检查
//输入参数:yyObject:年的object;mmObject:月的object;ddObject:日的object;
//输入参数:allowNull:true允许日期为空;false:必须选择日期
//输出参数:ture of false;
// b-13.1 checkValiDate(mmObject,ddObject,yyObject,allowNull)
function checkValidDate(yyObject,mmObject,ddObject,allowNull){
  	if(allowNull){
  		if(!(((!yyObject.options[0].selected)&&(!mmObject.options[0].selected)&&(!ddObject.options[0].selected)) || ((yyObject.options[0].selected)&&(mmObject.options[0].selected)&&(ddObject.options[0].selected))))
  			return showMsg("日期必须全部选择或者全部不选择!",yyObject);
  	}else{
  		if(yyObject.options[0].selected){
  			return showMsg("请选择日期的年!",yyObject);
  		}
  		if(mmObject.options[0].selected){
  			return showMsg("请选择日期的月!",mmObject);
  		}
  		if(ddObject.options[0].selected){
  			return showMsg("请选择日期的日!",ddObject);
  		}
  	}
  	
  	if(!yyObject.options[0].selected){
  		var my_year=yyObject[yyObject.selectedIndex].value;
  		var my_month=mmObject[mmObject.selectedIndex].value;
  		var my_day=ddObject[ddObject.selectedIndex].value;
  		
  		if(!checkMonthLength(my_month,my_day,my_year))
  			return showMsg("选择的日期不合法!",ddObject);
  	}
  	return true;
}


//建立者:任勇
//功能:对日期进行全面的检查
//输入参数:yyObject1:其始年的object;mmObject1:其始月的object;ddObject1:其始日的object;
//输入参数:allowNull1:起始日期true允许日期为空;false:必须选择日期
//输入参数:yyObject2:截止年的object;mmObject2:截止月的object;ddObject2:截止日的object;
//输入参数:allowNull2:截止日期true允许日期为空;false:必须选择日期
//输出参数:ture of false;
// b-13.2 checkValidDateRange(mmObject1,ddObject1,yyObject1,allowNull1,mmObject2,ddObject2,yyObject2,allowNull2)
function checkValidDateRange(yyObject1,mmObject1,ddObject1,allowNull1,yyObject2,mmObject2,ddObject2,allowNull2){
	if(!checkValidDate(mmObject1,ddObject1,yyObject1,allowNull1)) return false;
	if(!checkValidDate(mmObject2,ddObject2,yyObject2,allowNull2)) return false;
	
	if((!yyObject1.options[0].selected) && (!yyObject2.options[0].selected)){
		date1=new Date(yyObject1-1900,mmObject1-1,ddObject1);
		date2=new Date(yyObject2-1900,mmObject2-1,ddObject2);
		if(date1>date2){
			return showMsg("起始日期不能大于截止日期！",yyObject1);
		}
	}
	return true;
}


//建立者:任勇
//功能:显示提示信息Msg,光标焦点落在Obj上,返回false
//     主要用于检查必要字段是否正确
//示例:showMsg("用户名不能为空.",myform.username)
//输入参数:Msg(提示信息) Obj(光标焦点对象)
//输出参数:false
// b-15 showMsg(String, Object)
function showMsg(Msg, Obj)
{
	alert( Msg );
	Obj.focus();
	return false;
}

//是否为手机号码
function isMobile(obj,allwoNull)
{

	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allwoNull){
			return showMsg("必须输入！",obj);
		}
		return true;
	}
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return showMsg("手机号码含有非法字符！",obj);
		}
	}
	if(slen != 11)
        return showMsg("手机号码长度不正确！",obj);
	tempNo = obj.value.substring(0, 4)*1;

	if (tempNo >= 1300 && tempNo <= 1399)
			return true;
	else
       return showMsg("手机号码不正确！",obj);
	return true;
}
// b-17 checkGBK(Object,allowNull,msgname)
function checkGBK(obj,allowNull,msgname)
{

	obj.value=trim(obj.value);
	slen=obj.value.length;
	if(slen==0){
		if(!allowNull) 
			return showMsg("必须输入" + msgname + "！",obj);
		return true;
	}

	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		cc = escape(cc);
		if (!(cc.indexOf("%u") >= 0))
		{
		  return showMsg( msgname + " 必须为汉字！",obj);
	        }
	
	}
	return true;
}
// b-18 isPhone(Object,allowNull,msgname)
function isPhone(obj,allwoNull,msgname)
{

	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allwoNull){
			return showMsg("必须输入！",obj);
		}
		return true;
	}
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return showMsg( msgname + "含有非法字符！",obj);
		}
	}
	return true;
}
//b-19 isMobile(obj,allwoNull,msgname)是否为手机号码
function isMobile(obj,allwoNull,msgname)
{

	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allwoNull){
			return showMsg("必须输入！",obj);
		}
		return true;
	}
	
	for (i=0; i<slen; i++){
		cc = obj.value.charAt(i);
		if ((cc <"0" || cc >"9") && cc != "-" && cc!="+" && cc!="(" && cc !=")" && cc !="/")
		{
			return showMsg(msgname+"含有非法字符！",obj);
		}
	}
	if(slen != 11)
        return showMsg(msgname+"长度不正确！",obj);
	tempNo = obj.value.substring(0, 4)*1;

	if (tempNo >= 1300 && tempNo <= 1399)
			return true;
	else
        return showMsg(msgname+"不正确！",obj);
	return true;
}
// b-20 isEmail(Object,allwoNull,msgname)
function isEmail(obj,allowNull,msgname)
{
	obj.value=trim(obj.value);
	slen=getLength(obj.value);
	if(slen==0){
		if(!allowNull)
			return showMsg("必须输入！",obj);
		return true;
	}

	i=obj.value.indexOf("@");
	j=obj.value.lastIndexOf(".");
	// if (! ifGBK(obj)) i = -1;
	if (i == -1 || j == -1 || i > j)
	{
		return showMsg(msgname+"书写有误！",obj);
	}
	return true;
}
// b-21  checkCompareDate(objbegintime,objendtime,msgbeginname,msgendname,ischecknow)
function checkCompareDate(objbegintime,objendtime,msgbeginname,msgendname,ischecknow){
    var flag = false;  
		var sttime = objbegintime.value;
		var endtime = objendtime.value;

		 var today = new Date();
	    var year = today.getYear();
	    var month = today.getMonth() + 1;	
	    if(parseInt(month)<10){
	        month = "0" + parseInt(month);
	    }
	    var day = today.getDate();
	    if(parseInt(day)<10){
	        day = "0" + parseInt(day);
	    }
	
	    var cur = year + "-" + month + "-" + day;
	  	if(ischecknow) {
	    if(sttime > cur){
	        alert("尊敬的用户，您输入的"+msgbeginname+"应小于当前时间！");
	        objbegintime.focus();
	        return false;	    	
	    }
      }
	    if(sttime>endtime && endtime != ""){
	        alert("尊敬的用户，您输入的"+msgbeginname+"应小于"+msgendname+"！");
	        objbegintime.focus();
	        return false;	    
	    }
	
	    return true;	   
}
/**
以下是第三类
*/
//建立者:任勇
//加入了汉字的长度判断
// c-1 getLength(String)
function getLength(str){
	var templen=str.length;
	if(navigator.appName=='Netscape') return templen;
	for(var i=0;i<str.length;i++){
    		var rstr=escape(str.substring(i,i+1)); 
    		if (rstr.substring(0,2)=="%u"){ 
       			templen++;
    		} 
  	}
	return templen;
}

//建立者:任勇
//功能:去掉字符串前后的空格并返回
//输入参数:inputStr(待处理的字符串)theForm.mobile
//输出参数:inputStr(处理后的字符串)
// c-2 trim(String)
function trim(inputStr) {
	var result = inputStr;
	while (result.substring(0,1) == " ") {
		result = result.substring(1,result.length);
	}
	
	while (result.substring(result.length-1, result.length) == " ") {
		result = result.substring(0, result.length-1);
	}
		
	return result;
}


//建立者:任勇
//功能:将form中所有的text文本进行trim操作。
//输入参数:myform(form名)
//输出参数:无
// c-3 textTrim(form名称)
function textsTrim(myform){
  	for(var i=0;i<myform.elements.length;i++){
  		var etype=myform.elements[i].type;
  		if(etype = "text"){
 			myform.elements[i].value=trim(myform.elements[i].value);
  		}
  	}
}


function matchForbiddenCharacter( matchstr )
{
  var backStr = false;
  matchstr = replaceGBK( matchstr ) ;
  var re = /[^A-Za-z0-9_\.]/
  if ( re.test( matchstr )==true ) {
         backStr = true;
  }
  return backStr;
}

function replaceGBK(obj)
{
    var reStr = "";
        slen=obj.length;
        for (i=0; i<slen; i++){
                cc = obj.charAt(i);
                if ( cc == ' ' )
                {
                  cc = '_' ;
                }
                else
                {
                  cc = escape(cc);
                  if (cc.indexOf("%u") > -1)
                  {
                    cc = '_';
                  }
                }
                reStr += cc;
        }
        return reStr;
}

//建立者:严琨
//功能:鼠标移到对象上，改变指鼠标针，对象的背景颜色。
//输入参数:src对象ID，clrOver背景颜色,status为1表示改变指针样式，非1不改变
//输出参数:无
function mOvr(src,clrOver,status){
	if (!src.contains(event.fromElement)) {
		if(status==1)
		{
			src.style.cursor = 'hand';
		}
		src.bgColor = clrOver;
	}
}
//建立者:严琨
//功能:鼠标从对象上移出，改变指鼠标针，对象的背景颜色。
//输入参数:src对象ID，clrOver背景颜色,status为1表示改变指针样式，非1不改变
//输出参数:无
function mOut(src,clrIn,status)  {
	if (!src.contains(event.toElement)) {
		if(status==1)
			{
				src.style.cursor = 'default';
			}
		src.bgColor = clrIn;
	}
}

//建立者:严琨
//功能:验证数字和字母
//输入参数:str 字符串
//输出参数:boolean
function validateCharAndNumber(str){
	if(str==""){
		return false;
	}
	var myReg =/^[A-Za-z0-9]+$/;
	if(myReg.test(str)){
		return true;
	}
return false;
}



//建立者:严琨
//功能:验证数字
//输入参数:str 字符串
//输出参数:boolean
function validateNumber(str){
	if(str==""){
		return false;
	}
	var myReg =/^[0-9]+$/;
	if(myReg.test(str)){
		return true;
	}
return false;
}

//建立者:严琨
//功能:检测邮件地址
//输入参数:str 字符串
//输出参数:boolean
function validateEmail(str){
	if(str==""){
		return false;
	}
	var myReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if(myReg.test(str)){
		return true;
	}
return false;
}

//建立者:严琨
//功能:检测是否是移动的手机号
//输入参数:str 字符串
//输出参数:boolean
function validateMobileNum2(str){
	if(str==""){
		return false;
	}
	//var myReg = /^(134|135|136|137|138|139|158|159|150|151|152|157|188|147|187)\d{8}$/;
	var myReg = /^\d{11}$/;
	if(myReg.test(str)){
		return true;
	}
	return false;
}

//建立者:严琨
//功能:检测手机号
//输入参数:str 字符串
//输出参数:boolean
function validateMobileNum(str){
	if(str==""){
		return false;
	}
	//var myReg = /^(134|135|136|137|138|139|153|158|159|150|151|152|157|188|147|187)\d{8}$/;
	var myReg = /^\d{11}$/; //不做号段校验
	if(myReg.test(str)){
		return true;
	}
return false;
}
//建立者:严琨
//功能:验证日期格式
//输入参数:str 字符串
//输出参数:boolean
function isDate(str){
   if(str==""){ 
     return false;
   }
    var myReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
    if(myReg.test(str)){
		return false; 
	}
	return true;
}

//建立者:严琨
//功能:验证邮政编码
//输入参数:str 字符串
//输出参数:boolean
function validateZipCode(str){
	if(str==""){
		return false;
	}
	var myReg = /^[1-9]\d{5}$/;
	if(myReg.test(str)){
		return true;
	}
return false;
}

//建立者:严琨
//功能:检查电话号码或小灵通用户
//输入参数:str 字符串
//输出参数:boolean
function validatePhone(str){
	if(str==""){
		return false;
	}
	var myReg = /\d{3}-\d{8}|\d{4}-\d{7}|\d{3}-\d{7}|\d{4}-\d{8}/;
	if(myReg.test(str)){
		return true;
	}
return false;
}

//建立者:严琨
//功能:检测是否为联通的手机号
//输入参数:str 字符串
//输出参数:boolean
function isMobileByLianTong(str){
	if(str==""){
		return false;
	}
	var myReg = /^(130|131|132|133)\d{8}$/;
	if(myReg.test(str)){
		return true;
	}
return false;
}

//检测float数据类型
function checkFloat(str)
{
	if(str==""){
		return false;
	}
	var myReg = /^\d{1,7}.\d{2}$/;
	if(myReg.test(str)){
		return true;
	}
return false;
}


//建立者:严琨
//功能:复选框全选
//输入参数:e为全选 ，itemName为复选框名
//输出参数:无
function checkAll(e, itemName)
{
  var aa = document.getElementsByName(itemName);
  for (var i=0; i<aa.length; i++)
  {  
  	aa[i].checked  = e.checked;
  }   
}
function checkItem(e, allName)
{
  var all = document.getElementsByName(allName)[0];
  if(!e.checked) all.checked = false;
  else
  {
    var aa = document.getElementsByName(e.name);
    for (var i=0; i<aa.length; i++)
     if(!aa[i].checked) return;
    all.checked = true;
  }
}


//检测复选框的状态，全否return false,else return true
function IscheckAllBox(itemName)
{
  var aa = document.getElementsByName(itemName);
  for (var i=0; i<aa.length; i++)
  {  
  	if(aa[i].checked)return true;
  }   
  return false;
}

	function submitForm(){
		var hasselected = false;
		var elems = theform.idList;
		for( var i=0;i<elems.length;i++ ){
		  if( elems[i].checked ){    
			hasselected = true;
		  }
		}
		
		if( !hasselected ){
			alert( "至少选择一条删除数据！" );  
			return false;
		} 
		theform.action = "beforeDelGroupTsysAdStation.do";
		theform.submit();
	}


function selectAllNode(aform,v){
	    
	if(aform != null){
	var elems = aform.elements;
		
	for(var i=0;i<elems.length;i++){
        	if(elems[i].type == "checkbox")
       		 elems[i].checked = v;
	}
	}
}

//截取标题sum字符个数
function getNewsTitle(str,sum){
        var rstr=str; 
        var len=0;
            len=getStrLength(rstr);
	if(len>sum){
	 var templen=0;
	 var result="";
	  for(var i=0;i<rstr.length;i++){
	    templen++
	    var tempstr=escape(rstr.substring(i,i+1));
    	       if (tempstr.substring(0,2)=="%u"){ 
       			templen++;
    		} 
    		result+=rstr.substring(i,i+1);
    	        if(templen>=(sum-2)){
    	                break;
    	       }
    	       
	  }
	return result+'…';
	}else{
	return rstr;
	}
}
//按单字节计算字符串的长度
function getStrLen(str){
	var len = 0;
	var cnstrCount = 0;	
	for(var i = 0 ; i < str.length ; i++){
		if(str.charCodeAt(i)>255)
			cnstrCount = cnstrCount + 1 ;
	}
	len = str.length + cnstrCount;
	return len;
}

function getStrLength(str){
	var templen=str.length;
	if(navigator.appName=='Netscape') return templen;
	for(var i=0;i<str.length;i++){
    		var rstr=escape(str.substring(i,i+1)); 
    		if (rstr.substring(0,2)=="%u"){ 
       			templen++;
    		} 
  	}
	return templen;
}


//建立者:严琨
//获取当前max年内的年份
//参数selectBox为下拉框的名称，max 为范围
//输出option元素
function getOptionByYear(selectBox,max){ 
//当前日期
 d = new Date();	
 	for(i =0 ; i < max ; i++){ 		
 		myYear = d.getYear()+ 1 + i - max;
		selectBox.options[selectBox.length] = new Option( myYear,myYear);
		if(i == (max - 1)){
			selectBox.options[i + 1].selected = true;
		}
	}
}

//建立者:刘欣
//对当前日期做默认选中处理
//参数selectBox为下拉框的名称,dis为需要默认的月份与当前的月份距离,如果在当前月份之前,则为负数(-1,-2....)否则为(1,2....)当前为0
//输出option元素
//调用方式:getOptionByMonth(form1.selectBox, -1)
function getOptionByMonth(selectBox,dis){
	d = new Date();
	var month = d.getMonth() + 1;
	for(var i = 0 ; i < selectBox.length ; i ++){
		if(selectBox.options[i].value == (month + dis)){
			selectBox.options[i].selected = true;
		}
	}
}


//建立者:严琨
//按比率打开一个showModalDialog窗口
//url为打开的链接，bl为相当与屏幕的比率 如0.8,就是百分之八十
//returnvalue可以返回一个对象
function showModalWindow(url,bl){
 	var h = screen.availHeight*bl;
	var w = screen.availWidth*bl;
 	var returnvalue=showModalDialog(url,'tempwindow',"status:no;resizable:no;help:no;dialogHeight:"+ h +"px; dialogWidth:"+w + "px");
	return returnvalue;
}

//建立者:严琨
//转换月份，将一位的月份转换成二位的月份，如：1转换成01
function converMonth(str){
	if(str.length==1){		
		return "0"+str;
	}else{
		return str;
	}
}

//建立者:严琨
//根据主列表的变化加载子列表
//locationObj主列表对象，targetObj子列表对象,sublist数组
function changelocation(locationObj,targetObj,sublist)
    {
    targetObj.length = 0; 
	targetObj.options[targetObj.length] = new Option("请选择", "");
    var locationid=locationObj.value;
	if(locationid!=""){
    for (var i=0;i < sublist.length; i++)
        {
            if (sublist[i][2] == locationid)
            { 
                targetObj.options[targetObj.length] = new Option(sublist[i][1], sublist[i][0]);
            }        
        }
	}
}

//建立者宋鑫磊
//如果TEMP参数有值，将TEMP设置selected
//locationObj主列表对象，targetObj子列表对象,sublist数组,TEMP值
function changelocation2(locationObj,targetObj,sublist,temp)
    {

    targetObj.length = 0; 
	targetObj.options[targetObj.length] = new Option("请选择", "");
    var locationid=locationObj.value;
	if(locationid!=""){
    for (var i=0;i < sublist.length; i++)
        {
            if (sublist[i][2] == locationid)
            { 
                targetObj.options[targetObj.length] = new Option(sublist[i][1], sublist[i][0]);
                
                if(temp != null && temp != ''){
                	if(sublist[i][0] == temp){
                		targetObj.options[targetObj.length-1].selected = true;
                	}
                }
            }        
        }
	}
}

//计算字符串长度，中文字符当两个字节算
function getStringLength(str) {
	var len = 0;
	for (i=0; i<str.length; i++) {
		if (str.charCodeAt(i)>255) len+=2; else len++;
		//if (str.charCodeAt(i)-128<0) len+=2; else len++;
	}
	return len;
}
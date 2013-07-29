window.onload = function() {
	//document.getElementById("numberPlace").innerHTML = "";
    document.getElementById('numberPlace').focus();
}
function validateNumber( num ) {
		var number = num.value.replace( /\D/g, '' ).split( /(?=.)/ );
        var i = number.length - 1;
        if ( i >= 0 )
        	number.unshift( '+' );
        if ( i >= 1 ) 
        	number.splice( 2, 0, ' (' );
        if ( i < 3 ) 
        	document.getElementById("operator").innerHTML = "";
        if ( i == 3 || i == 4 ) 
        	checkOperator();
        if ( i >= 3 ) 
        	number.splice( 6, 0, ') ' );
        if ( i >= 7 ) 
        	number.splice( 10, 0, '-' );
        if ( i >= 9 ) 
        	number.splice( 13, 0, '-' );
        if ( i == 10 ) 
        	checkNumber();
        if(i < 10)
         	document.getElementById("check").innerHTML = ""; 
        num.value = number.join( '' );	 
    }

function checkOperator() {
	var number = document.getElementById("numberPlace");
	var countryCode = number.value.slice(0,2);
	var operCode = number.value.slice(4,7);
	if(countryCode == "+7" && operCode == "916")
		document.getElementById("operator").innerHTML = "MTS";
	else if(countryCode == "+7" && operCode == "903")
		document.getElementById("operator").innerHTML = "Beeline";
	else if(countryCode == "+7" && operCode == "926")
		document.getElementById("operator").innerHTML = "Megafon";
	else
		document.getElementById("operator").innerHTML = "Не найден";
}
function checkNumber() {
	if((document.getElementById("operator").innerHTML != "Не найден"))
		document.getElementById("check").innerHTML = "OK";
}
function keyNum(num){
	var number = document.getElementById("numberPlace");
	var cursorPos = getCaretPosition(number);
	//alert(cursorPos);
	if(number.value.length == 18)
		return 0;
	number.value = number.value.slice(0,cursorPos) + num + number.value.slice(cursorPos,number.length);
	checkOperator();
	validateNumber(number);

}
function delNum() {
	var number = document.getElementById("numberPlace");
	var cursorPos = getCaretPosition(number);
	number.value = number.value.slice(0,cursorPos - 1) + number.value.slice(cursorPos,number.length);
	checkOperator();
	validateNumber(number);
	
}
function mouseDown(key) {
	document.getElementById(key).style.backgroundColor = 'gainsboro';
}
function mouseUp(key) {
	document.getElementById(key).style.backgroundColor = 'whitesmoke';
}

function getCaretPosition(obj){
	var cursorPos = null;
	if (document.selection){
		var range = document.selection.createRange();
		range.moveStart('textedit', -1);
		cursorPos = range.text.length;
	}
	else 
	{
		cursorPos = obj.selectionStart;
	} 
	return cursorPos;
}
/*function fn() {  
 	var input = document.getElementById("numberPlace");
 	alert(typeof input);
    var range = input.createTextRange();  
    range.setEndPoint("EndToStart", document.selection.createRange());  
    alert(range.text.length);  

 }*/

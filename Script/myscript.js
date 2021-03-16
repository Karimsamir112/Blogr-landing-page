function showDiv() {
	
	document.querySelector(".inside-humburger").style.display="block";
	document.querySelector(".burger").style.display="none";
	document.querySelector(".close").style.display="block";
}

function closeDiv() {
	document.querySelector(".inside-humburger2").style.display="none";
}

function hideDiv() {
	
	document.querySelector(".inside-humburger").style.display="none";
	document.querySelector(".inside-humburger2").style.display="block";
	setTimeout(closeDiv , 400);
	document.querySelector(".burger").style.display="block";
	document.querySelector(".close").style.display="none";
	
}

function elevateHeight() {
	
	document.querySelector(".inside-humburger").style.height="580px";
	
}

function decraseHeight() {
	
	document.querySelector(".inside-humburger").style.height="370px";
}
function shareonclick() {
	
	if(document.documentElement.clientWidth < 600){
		document.getElementById('share').style = "color:hsl(214, 17%, 51%)";
		document.getElementById('share').style.display = "block";
		document.getElementById('share').style.textAlign = "center";
		document.getElementById('share').innerHTML = "SHARE <img src='./images/icon-facebook.svg'> <img src='./images/icon-twitter.svg'> <img src='./images/icon-pinterest.svg'>";
		document.getElementById('share').style.borderBottomLeftRadius = "2%";
		document.getElementById('share').style.borderBottomRightRadius = "2%";
		document.getElementById('share').style.borderTopLeftRadius = "0";
		document.getElementById('share').style.borderTopRightRadius = "0";
		document.getElementById('share').style.backgroundColor = "hsl(217, 19%, 35%)";
		document.getElementById('share').style.marginTop = "25px";
		document.getElementById('share').style.textDecoration = "none";
	}
	
	else{
	
	document.getElementById('share').innerHTML = "SHARE <img src='./images/icon-facebook.svg'> <img src='./images/icon-twitter.svg'> <img src='./images/icon-pinterest.svg'>";
	document.getElementById('share').style = "color:hsl(214, 17%, 51%)";
	document.getElementById('share').style.backgroundColor = "hsl(217, 19%, 35%)";
	document.getElementById('share').style.textDecoration = "none";
	document.getElementById('share').style.borderRadius = "3%";
	document.getElementById('share').style.paddingTop = "15px";
	
}

	
}
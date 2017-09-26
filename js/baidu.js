// 展开更多产品
function displayMoreProduct() {
    document.getElementById("hidemp").style.display = "none";
    document.getElementById("moreproduct").style.display = "block";
    document.getElementById("nav").style.marginRight="90px";
}
//隐藏更多产品
function hideMoreProduct() {

    document.getElementById("moreproduct").style.display = "none";
    document.getElementById("hidemp").style.display = "block";
    document.getElementById("nav").style.marginRight="0px";
}
function displaySetting(){
	document.getElementById("setting").style.display = "block";
}
function hideSetting(){
	document.getElementById("setting").style.display = "none";
}
function displayInput(){
	document.getElementById("wd").style.borderColor = "#4791ff";
}
function hideInput(){
	document.getElementById("wd").style.borderColor = "#b6b6b6";
}
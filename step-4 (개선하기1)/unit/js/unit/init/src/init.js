function getStyle(ele, style){
	return window.getComputedStyle(ele, null).getPropertyValue(style);
}


function init(){
	var foo = document.getElementById('foo');
	foo.addEventListener("click",function(){
		console.log("click");
	});

}

// document.addEventListener("DOMContentLoaded",function(){
window.addEventListener("load",function(){
	init();
	var bar = document.getElementById('bar');
	console.log(getStyle(bar,"width"));
});
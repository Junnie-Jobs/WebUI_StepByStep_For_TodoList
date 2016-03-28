function add(){
	baz();
}

function destory(){

}

function baz(){

}

function init(){
	document.getElementById('foo').addEventListener("click",add);
	document.getElementById('bar').addEventListener("click",destory);
}

document.addEventListener("DOMContentLoaded", function(){
	init();
});

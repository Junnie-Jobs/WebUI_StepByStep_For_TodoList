
var TODO = (function(window) {

	'use strict';

	var ENTER_KEY = 13;

	var newTodoList = 
			"<li>"+
				"<div class='view's>"+
					"<input class='toggle' type='checkbox'>"+
					"<label>{{todo}}</label>"+
					"<button class='destroy'></button>"+
				"</div>"+
				"<input class='edit' value='{{todo}}''>"+
			"</li>";

	var url = "http://128.199.76.9:8002/:Junnie-Jobs/";

	var addTemplate = Handlebars.compile(newTodoList);

	function init(){

		$.ajax(url,{
 		  	dataType:"JSON",
 		  	type : "GET"
 		}).done(function(data) {
 		  	for(var i = data.length-1; i >= 0 ; i--){ //데이타가 보여지는 순서를 유지하기 위해 --하는 형태로...
 		  		$(addTemplate({"todo":data[i].todo, "elementId":data[i].id})).appendTo(".todo-list");
 		  		console.log(data[i]);
 		  	}
 		}).fail(function(){
 			console.log("not connected...");
 		});


		$(".new-todo").on("keydown", addListTodo);
		$(".todo-list").on("click", ".toggle", completed);
		$(".todo-list").on("click", ".destroy", destroy);
	}

	function completed(e){
		$(e.target).closest("li").toggleClass("completed");
	}

	function destroy(e){
		$(e.target).closest("li").slideUp();
	}
	
	function addListTodo(e){

		var todoName = $(e.target).val();
		if(e.which === ENTER_KEY && todoName !== ""){
			$(addTemplate({"todo":todoName})).appendTo(".todo-list");
			$(e.target).val("");
			$.ajax(url,{

				dataType:"JSON",
				type:"POST",
				data: {"todo": todoName}

			}).done(function(data){
				console.log(data);
			}).fail(function(){
				alert("there is error!!");
				console.log(status);
			});			
		}		
	}

	return {
		"init" : init
	}

})(window);

$(function(){
	TODO.init();	
});
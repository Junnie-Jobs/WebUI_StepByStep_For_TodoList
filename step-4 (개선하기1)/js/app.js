var TODO = (function(window) {

	'use strict';

	function init(){
		alert(1);
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

		var ENTER_KEY = 13;

		var newTodoList = 
			"<li>"+
				"<div class=\"view\"s>"+
					"<input class=\"toggle\" type=\"checkbox\">"+
					"<label>{{todo}}</label>"+
					"<button class=\"destroy\"></button>"+
				"</div>"+
				"<input class=\"edit\" value=\"{{todo}}\">"+
			"</li>";

		var addTemplate = Handlebars.compile(newTodoList);

		var todoName = $(e.target).val();
		if(e.which === ENTER_KEY && todoName !== ""){
			$(addTemplate({"todo":todoName})).appendTo(".todo-list");
			$(e.target).val("");
		}
	}

	return {
		"init" : init
	}

})(window);

$(function(){
	TODO.init();	
});
(function () {
	var todo = document.getElementById('todo');
	var button = document.getElementById('add');
	var inputList = document.querySelectorAll("li input");
	var todolist = document.getElementById('todolist');

	function createTodo(todoVal){

		var li = document.createElement("li");
		var span = document.createElement("span");
		var input = document.createElement("input");
		input.setAttribute("type","checkbox");
		span.innerText = todoVal;

		li.appendChild(input);
		li.appendChild(span);

		todolist.appendChild(li);

	}

	button.addEventListener("click",function(e){
		createTodo(todo.value);
		todo.value = "";
	});

	for (var i = 0; i < inputList.length; i++) {
		inputList[i].addEventListener("click",function(e){
			if(e.target.parentNode.className === "complete"){
				e.target.parentNode.className = "";
			} else {
				e.target.parentNode.className = "complete";
			}
		});
	}

})();
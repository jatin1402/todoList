const app = new Vue({

	el: '#app',

	data:{

		title:'TODO-LIST',
		newTodo:'',
		todos: []
	},

	methods: {

		 addTodo(){

		 	this.todos.push({
		 		title: this.newTodo,
		 		done: false
		 	});
		 	this.newTodo='';

		},

		removeTodo(todo){
			const todoIndex= this.todos.indexOf(todo);
			this.todos.splice(todoIndex,1); 
		},

		alldone(){
			this.todos.forEach(function(todo){
				todo.done = true;
			});
		}
		
	}
})

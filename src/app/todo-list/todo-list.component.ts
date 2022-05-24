import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  //save view filter status (all, done, pending)
  listView: string = 'all';

  // idForTodo: number = 3;
  inputTodo: string = '';
  //editingTodo: string = '';
  // todos = [
  //   {
  //   'id': 1,
  //   'name': 'first one',
  //   'completed': true
  //   },
  //   {
  //   'id': 2,
  //   'name': 'second one',
  //   'completed': false
  //   }];
  
  todos: Todo[];

  addTodo() :void{
    if(this.inputTodo.trim().length === 0){
      return;
    }
    
    if (Array.isArray(this.todos)) {
      this.todos.push({
        //'id': this.idForTodo,
        'name': this.inputTodo,
        'completed': false,
        'edit': false
      });
    }else if(!Array.isArray(this.todos)){
      this.todos = [
        {
          //id:1,
          'name': this.inputTodo,
          'completed': false,
          'edit': false
        }
      ]
    }

    

    this.inputTodo = '';
    // this.idForTodo++;
  }

  filterTodos(state:string){
    if(state === 'all'){
      this.listView = state;
    }else if(state === 'done'){
      this.listView = state;
    }else if (state === 'pending'){
      this.listView = state;
    }else{
      return;
    }

  }


  deleteTodo(id:number) :void{
    // this.todos = this.todos.filter(todo => todo.id != id);
    this.todos = this.todos.filter((value, idx) => idx !== id);
  }

  toggleDone(id:number) :void{
    this.todos.map((value, idx) => {
      if(idx === id){
        value.completed = !value.completed;

        console.log("done to: "+value.completed);
      } 
      return value;
    })
  }

  editTodo(id:number, editText:string) :void{
    this.todos.map((value, idx) => {
      if(idx === id) {
        console.log(value.name)
        value.name = editText;
        // value.name = this.editingTodo;
        console.log("edited")
        this.setEdit(id);
      }

      return value;
    })
  }

  setEdit(id:number) :void{
    this.todos.map((value, idx) => {
      if(idx === id) value.edit = !value.edit;

      console.log("editing: " + value.edit)

      return value;
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        //id:1,
        name: "First Todo",
        completed: false,
        'edit': false
      },
      {
        //id:2,
        name: "Second Todo",
        completed: true,
        'edit': false
      }

    ];
  }

}

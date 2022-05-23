import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  idForTodo: number = 3;
  todoTitle: string = '';
  todos = [{
    'id': 1,
    'name': 'first one',
    'completed': true,
    'editing': false
  },{
    'id': 2,
    'name': 'second one',
    'completed': false,
    'editing': false
  }];
  
  addTodo() :void{
    if(this.todoTitle.trim().length === 0){
      return;
    }
    this.todos.push({
      'id': this.idForTodo,
      'name': this.todoTitle,
      'completed': true,
      'editing': false
    })
    this.todoTitle = '';
    this.idForTodo++;
  }

  deleteTodo(id:number) :void{
    this.todos = this.todos.filter(todo => todo.id != id);
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}

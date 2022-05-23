import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

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
  

  constructor() { }

  ngOnInit(): void {
    
  }

}

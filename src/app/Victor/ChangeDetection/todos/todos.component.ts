import { Component, OnInit } from '@angular/core';
import {Todo} from './../todo'
import {ImmutableTodoComponent}  from './../immutable-todo/immutable-todo.component'
import {ObservableTodoComponent}  from './../observable-todo/observable-todo.component'
import {Observable, BehaviorSubject } from 'rxjs/Rx';


type ObservableTodo = BehaviorSubject<Todo>;
type ObservableTodos = BehaviorSubject<Array<ObservableTodo>>;


@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  directives: [ImmutableTodoComponent, ObservableTodoComponent]
})
export class TodosComponent implements OnInit {

  todos_immutable :Todo[];
  todos_observable :ObservableTodos;


  constructor() {

   }

  ngOnInit() {

    this.todos_immutable = [
      {name:"eat breakfast", checked:true},
      {name:"launch pc", checked:false}
    ]

    this.todos_observable = new BehaviorSubject([
      new BehaviorSubject({name:"observable eat breakfast", checked:true}),
      new BehaviorSubject({name:"observable launch pc", checked:false})
    ])

  }

}

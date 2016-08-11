import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Todo} from './../todo'
import {Observable, BehaviorSubject} from 'rxjs/Rx';


type ObservableTodo = BehaviorSubject<Todo>;

@Component({
  selector: 'app-observable-todo',
  templateUrl: 'observable-todo.component.html',
  styleUrls: ['observable-todo.component.css']
})

export class ObservableTodoComponent implements OnInit , OnChanges {

  @Input('todo') todo :ObservableTodo;


  constructor() {
   }

  ngOnInit() {
    console.log("ngoninit");
    console.log(this.todo);
    this.todo.do((value)=>{
      console.log("do operator", value);
    })
    this.todo.subscribe(
      (obj)=>{console.log("todo component subscription", obj)}
    )
  }
  ngOnChanges(obj){
    console.log(obj);
  }

  change_check_status = ()=>{
/*
    this.todo.reduce((acc: Todo)=>{
      acc.checked = !acc.checked;
    }
*/
   // this.todo.checked = !this.todo.checked;
  }

  change_data = ()=>{

   this.todo.next({name:"111", checked:false})
  }


}

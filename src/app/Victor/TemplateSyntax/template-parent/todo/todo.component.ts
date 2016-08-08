import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() model :string;
  @Output() complete = new EventEmitter<string>();

  model_data : string;
  constructor() {
    console.log("constructor");
   }
  ngOnChanges(obj){
    console.log("ngOnChanges", obj);
    this.model_data = this.model;
  }
  ngOnInit() {
    console.log("ng oninit")
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }

  todo_complete = function(){
    console.log("todo complete is clicked");
    this.complete.next("aaaaa");
     // this.complete.emit("aaa"); も類似の動作
     // https://angular.io/docs/ts/latest/api/core/index/EventEmitter-class.html
  }


}

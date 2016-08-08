import { Component, OnInit } from '@angular/core';
import {TodoComponent} from './todo/todo.component'

@Component({
  selector: 'app-template-parent',
  templateUrl: 'template-parent.component.html',
  styleUrls: ['template-parent.component.css'],
  directives:[TodoComponent]
})
export class TemplateParentComponent implements OnInit {


  in_data_model :string = "test todo";

  constructor() {
   }

  ngOnInit() {
  }

  onCompleteTodo = function(param){
    console.log("parent concomplete todo is called");
    console.log(param);

  }
}

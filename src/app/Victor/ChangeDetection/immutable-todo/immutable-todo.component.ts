import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {Todo} from './../todo';

@Component({
  selector: 'app-immutable-todo',
  templateUrl: 'immutable-todo.component.html',
  styleUrls: ['immutable-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

 // https://angular.io/docs/ts/latest/api/core/index/ChangeDetectionStrategy-enum.html

export class ImmutableTodoComponent implements OnInit {

  @Input ('todo') todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}

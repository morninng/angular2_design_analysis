import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../counter-reducer';
import {Observable} from 'rxjs/Rx'

interface AppState{
  counter: number;
}

@Component({
  selector: 'app-count',
  templateUrl: 'count.component.html',
  styleUrls: ['count.component.css']
})
export class CountComponent implements OnInit {

  counter: Observable<any>;

  constructor(public store: Store<AppState>) { 
    this.counter = store.select('counter');
  }

  ngOnInit() {
  }

  increment(){
    console.log("increment is cilcked");
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
      this.store.dispatch({ type: DECREMENT });
  }

  reset(){
      this.store.dispatch({ type: RESET });
  }

}

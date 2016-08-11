import { Component, OnInit } from '@angular/core';
import { Subject, Observable} from 'rxjs/Rx';
import {Store, Action} from '@ngrx/store';
import {HOUR, SECOND} from './reducer'

@Component({
  selector: 'app-clock-reducer',
  templateUrl: 'clock-reducer.component.html',
  styleUrls: ['clock-reducer.component.css']
})

export class ClockReducerComponent implements OnInit {

  click$ = new Subject();

  clock;
  constructor(store:Store<Date>) {
    this.clock = store.select('clock');

    Observable.merge(
      this.click$.mapTo({type:HOUR,payload:3}),
      Observable.interval(1000).mapTo({type:SECOND,payload:2})
    )
    .subscribe((action : Action)=>{
      console.log(action);
      store.dispatch(action)
    })
   }

  ngOnInit() {
  }

}

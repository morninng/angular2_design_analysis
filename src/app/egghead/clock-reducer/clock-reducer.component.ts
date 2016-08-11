import { Component, OnInit } from '@angular/core';
import { Subject, Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
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
      this.click$.mapTo(HOUR),
      Observable.interval(1000).mapTo(SECOND)
    )
    .subscribe((type)=>{
      console.log(type);
      store.dispatch({type})
    })
   }

  ngOnInit() {
  }

}

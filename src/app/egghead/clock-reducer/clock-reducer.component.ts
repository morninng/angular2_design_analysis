import { Component, OnInit } from '@angular/core';
import { Subject, Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

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
      this.click$.mapTo('hour'),
      Observable.interval(1000).mapTo('second')
    )
    .subscribe((type)=>{
      console.log(type);
      store.dispatch({type})
    })
   }

  ngOnInit() {
  }

}

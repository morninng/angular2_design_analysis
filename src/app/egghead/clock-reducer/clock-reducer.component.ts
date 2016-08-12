import { Component, OnInit } from '@angular/core';
import { Subject, Observable} from 'rxjs/Rx';
import {Store, Action} from '@ngrx/store';
import {HOUR, SECOND, ADVANCE} from './reducer'
import {ClockComponent} from './clock/clock.component';

@Component({
  selector: 'app-clock-reducer',
  templateUrl: 'clock-reducer.component.html',
  styleUrls: ['clock-reducer.component.css'],
  directives: [ClockComponent]
})

export class ClockReducerComponent implements OnInit {

  click$ = new Subject()
            .map((value :string)=>{
              return {type:HOUR, payload:parseInt(value)}
            });

  person$ = new Subject()
              .map((value)=>{
                console.log('person is clicked', value);
                return {type:ADVANCE, payload: value }
              })

  seconds$ = Observable.interval(1000)
            .mapTo({type:SECOND,payload:2});
  timer :any;
  people :any;

  constructor(store:Store<Date>) {
    this.timer = store.select('clock');
    this.people = store.select('people');

    Observable.merge( this.click$, this.seconds$, this.person$)
    .subscribe((action : Action)=>{
      console.log('merged observable action', action);
      store.dispatch(action);
    })
   }

  ngOnInit() {
  }

}

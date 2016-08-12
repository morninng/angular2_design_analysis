import { Component, OnInit } from '@angular/core';
import { Subject, Observable} from 'rxjs/Rx';
import {Store, Action} from '@ngrx/store';
import {HOUR, SECOND} from './reducer'
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

  seconds$ = Observable.interval(1000)
            .mapTo({type:SECOND,payload:2});
  timer :any;

  constructor(store:Store<Date>) {
    this.timer = store.select('clock');

    Observable.merge( this.click$, this.seconds$)
    .subscribe((action : Action)=>{
      console.log(action);
      store.dispatch(action);
    })
   }

  ngOnInit() {
  }

}

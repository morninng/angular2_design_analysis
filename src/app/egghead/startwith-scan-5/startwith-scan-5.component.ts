import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';

@Component({
  selector: 'app-startwith-scan-5',
  templateUrl: 'startwith-scan-5.component.html',
  styleUrls: ['startwith-scan-5.component.css']
})
export class StartwithScan5Component implements OnInit {

  click$ = new Subject();
  clock;

  constructor() {
        this.clock = Observable.merge(
            this.click$,
            Observable.interval(1000)
        )
        .startWith(new Date())
        .scan((acc, curr)=> {
            const date = new Date(acc.getTime());

            date.setSeconds(date.getSeconds() + 1);

            return date;
        });
 }

  ngOnInit() {
    
  }

}

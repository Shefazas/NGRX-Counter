import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from 'src/app/state/counter.selectors';
import { counterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})

export class CounterOutputComponent implements OnInit, OnDestroy{

  //@Input() counter:any;
  counter!:any;
  counterSubscription!: Subscription;

  //(or)

  // counter$!: Observable<{ counter: any}>;

  counter$!:Observable<number>;

  //Retrieving Store in component by injecting
  constructor(private store: Store<{ counter:{counter:counterState}}>){}

  //calling Action
  //this.store.dispatch(increment());

  //retrieving state data
 // this.store.select('counter');

  


  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe(data =>{
    //   console.log("Counter");
      
    //     this.counter = data.counter;
    //   });
  
      //(or)
  //  this.counterSubscription = this.store.select(getCounter).subscribe(data =>{
  //   console.log("Counter");
    
  //     this.counter = data;
  //   });

    //(or)

    this.counter$ = this.store.select(getCounter);
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }   
  }
}

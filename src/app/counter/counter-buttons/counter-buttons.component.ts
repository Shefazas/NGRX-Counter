import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.actions';
import { counterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit{

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();


  constructor(private store: Store<{ counter:{counter:counterState}}>){
                                                                                                                         
  }

  onIncrement(){
    this.store.dispatch(increment())
    //this.increment.emit();
  }

  onDecrement(){
    this.store.dispatch(decrement())
    //this.decrement.emit();
  }

  onReset(){
    this.store.dispatch(reset())
    //this.reset.emit();
  }

  ngOnInit(): void {
    
  }
}

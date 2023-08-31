import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeText, customIncrement } from 'src/app/state/counter.actions';
import { getText } from 'src/app/state/counter.selectors';
import { counterState } from 'src/app/state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})

export class CustomCounterInputComponent implements OnInit {

  value!:number;
  text$!: Observable<string>;

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    // this.store.select('counter').subscribe((data)=>{
    //   console.log("Counter Text");
      
    //   this.text = data.text;
      
    // })
    // OR
    // this.store.select(getText).subscribe((data)=>{
    //   console.log("Counter Text");
      
    //   this.text = data;
      
    // })
    // OR
    this.text$ = this.store.select(getText);
  }

  onAdd(){
    this.store.dispatch(customIncrement({value: +this.value}));
    console.log(this.value);  
  }

  onChangeText(){
    this.store.dispatch(changeText())
  }

}

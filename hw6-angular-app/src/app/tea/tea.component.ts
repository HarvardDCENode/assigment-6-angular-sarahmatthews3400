import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit {

  @Input() tea:any;
  @Output() upvotedEvent = new EventEmitter<string>();
  votes:number = 0;

  constructor() {
  }

  upvote(name:string):void{
    console.log(name);
    this.votes+=1;
    this.upvotedEvent.emit(name);
  }

ngOnInit(){}
}

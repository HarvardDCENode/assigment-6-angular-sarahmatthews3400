import { Component, OnInit } from '@angular/core';
import { TeaService } from './tea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw6-angular-app';
  constructor(private teaService:TeaService){
  }

  teaList:any = null;

  numTeas:number = 3;

  totalVotes:number = 0;
  mostRecentVotedOn:string = '';
  handleUpvoted(e:any):void{
    console.log("app-component gets upvoted:" + e);
    this.totalVotes += 1;
    this.mostRecentVotedOn = e;
  }
  ngOnInit() {
      this.teaList = this.teaService.listTeas();
      this.numTeas = this.teaList.length()
  }
}

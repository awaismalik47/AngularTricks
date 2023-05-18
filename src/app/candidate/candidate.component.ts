import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  dataSource = [
    { id: 1, name: "Angular", price: "45.00" },
    { id: 2, name: "React Js", price: "30.00" },
    { id: 3, name: "Vue Js", price: "20.00" }
  ];
  data=[
  {name:"awais",address:"ali park ext",
  city:"lahore",
  country:"paksitan",
  state:"punjab"
},
{name:"awais2",address:"ali park ext",
  city:"lahore",
  country:"paksitan",
  state:"punjab"
},
{name:"awai3",address:"ali park ext",
  city:"lahore",
  country:"paksitan",
  state:"punjab"
},

];


  constructor() { }

  ngOnInit(): void {
   
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
  }
  dataSend(e:any){
       // assume you have received the start and end dates from an API and stored them in variables
const startDate = new Date('2022-01-01');
const endDate = new Date('2022-01-15');

// calculate the difference in milliseconds between the two dates
const timeDiff = endDate.getTime() - startDate.getTime();

// calculate the number of days between the two dates
const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

console.log('Days between the two dates:', daysDiff);
    console.log("candidate ma dobara agaya ha ",e)
  }

}

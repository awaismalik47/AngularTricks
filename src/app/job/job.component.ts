import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { previousDay } from 'date-fns';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @ViewChild(MatTable) table:MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  data=[
    {name:"Awais khaliq",address:"ali park ext",
    city:"Dubai",
    country:"Ajman",
    state:"Sheikhupura"
  },
  {name:"Awais khaliq",address:"ali park ext",
    city:"Dubai",
    country:"Ajman",
    state:"Sheikhupura"
  },
  {name:"Awais khaliq",address:"ali park ext",
    city:"Dubai",
    country:"Ajman",
    state:"Sheikhupura"
  },
  
    
  ];
  constructor() { }

  ngOnInit(): void {
    console.log("jobArray",this.data)
  }
  dataSend(e){
    console.log("job ma dobara agaya ho",e)
  }
  drag(event:CdkDragDrop<PeriodicElement[]>){
    moveItemInArray(this.dataSource,event.previousIndex,event.currentIndex)
    this.table.renderRows();
  }

}

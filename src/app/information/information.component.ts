import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
@Input() data
@Output() dataSend: EventEmitter<any> =
        new EventEmitter<any>();
        headers = ['<input type="checkbox">', 'Column 1', 'Column 2', 'Column 3'];

  constructor() { }

  ngOnInit(): void {
  console.log("inforamtion",this.data)
  }
  onSelect(data){
    console.log("row data",data)
    this.dataSend.emit(data)
  }
  chartData = [    ['Year', 'Sales', { role: 'style' }],
    ['2010', 1000, 'color: #3366CC'],
    ['2011', 1170, 'color: #3366CC'],
    ['2012', 660, 'color: #F08080'],
    ['2013', 1030, 'color: #3366CC'],
  ];
  chartOptions = {
    title: 'Sales by Year',
    legend: 'none',
    hAxis: {
      title: 'Year',
    },
    vAxis: {
      title: 'Sales',
    },
  };
  chartWidth = 600;
  chartHeight = 400;

}

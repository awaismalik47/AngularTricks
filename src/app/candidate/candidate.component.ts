import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent implements OnInit {
  checkboxValue;
  URl: boolean = false;
  country: boolean = false;
  inputFiled: boolean = false;
  inputHidden:boolean=false;
  dataSource = [
    { id: 1, name: 'Angular', price: '45.00' },
    { id: 2, name: 'React Js', price: '30.00' },
    { id: 3, name: 'Vue Js', price: '20.00' },
  ];
  data = [
    {
      name: 'awais',
      address: 'ali park ext',
      city: 'lahore',
      country: 'paksitan',
      state: 'punjab',
    },
    {
      name: 'awais2',
      address: 'ali park ext',
      city: 'lahore',
      country: 'paksitan',
      state: 'punjab',
    },
    {
      name: 'awai3',
      address: 'ali park ext',
      city: 'lahore',
      country: 'paksitan',
      state: 'punjab',
    },
  ];
  selectedItem;
  newMonthName: any;
  newDateName: any;
  constructor() {}

  ngOnInit(): void {}
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
  }
  dataSend(e: any) {
    // assume you have received the start and end dates from an API and stored them in variables
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2022-01-15');

    // calculate the difference in milliseconds between the two dates
    const timeDiff = endDate.getTime() - startDate.getTime();

    // calculate the number of days between the two dates
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    console.log('Days between the two dates:', daysDiff);
    console.log('candidate ma dobara agaya ha ', e);
  }
  selectedDateTime: any;
  handleDateTimeChange(dateTimeValue: string) {
    // debugger;
    const date = new Date(dateTimeValue);
    const isoString = date.toString();
    console.log('tostringValues', isoString);
    // Getting Day No:::::::::::::
    let dayNo = date.getDay();
    console.log('dayName', dayNo);
    // Getting Month Name:::::::::::::
    let monthName = date.getMonth();
    if (monthName < 10) {
      this.newMonthName = `0${monthName + 1}`;
    } else if (monthName > 10) {
      this.newMonthName = `${monthName + 1}`;
    }
    // Getting Ful Year:::::::::::::
    let fullyear = date.getFullYear();
    console.log('year Name', fullyear);
    // Getting FTime Zone :::::::::::::
    const timeZoneOffset = date.getTimezoneOffset();
    console.log('timezoneOffset', timeZoneOffset);
    // Getting Date
    let dateIs = date.getDate();
    if (dateIs < 10) {
      this.newDateName = `0${dateIs}`;
    } else if (dateIs > 10) {
      this.newDateName = `${dateIs}`;
    }
    console.log('Date is', dateIs);
    let hours = date.getHours();
    let ms = date.getUTCMilliseconds();
    console.log(ms);
    console.log('gettting hours', hours);
    const minutes = date.getMinutes();
    console.log('gettting minutes', minutes);
    const second = date.getUTCSeconds();
    console.log('gettting second', second);
    const timeZoneOffsetString = this.getTimeZoneOffsetString(timeZoneOffset);
    console.log('time zone Here ', timeZoneOffsetString);
    // this.selectedDateTime = isoString.slice(0, -1) + timeZoneOffsetString;
    // console.log(this.selectedDateTime);
    let desiredTime = `${fullyear}-${this.newMonthName}-${this.newDateName}T${hours}:${minutes}:${second}.${ms}.${timeZoneOffsetString}`;
    console.log('desired Date syntax', desiredTime);
  }

  getTimeZoneOffsetString(offset: number): string {
    const sign = offset > 0 ? '-' : '+';
    const absoluteOffset = Math.abs(offset);
    const hours = Math.floor(absoluteOffset / 60)
      .toString()
      .padStart(2, '0');
    const minutes = (absoluteOffset % 60).toString().padStart(2, '0');
    return `${sign}${hours}${minutes}`;
  }

  // Meeting Mode
  meetingMode(item) {
    this.inputHidden=true;
    this.selectedItem = item;
  if(this.selectedItem=='virtual'){
    this.URl=true;
    this.country=false;
  }
  else if (this.selectedItem=='inPerson'){
    this.country=true;
    this.URl=false;
  }
    console.log('item Selected', item);
  }
}

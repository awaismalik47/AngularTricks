import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first, reduce } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { data } from './data.modal';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  myReactiveForm:FormGroup
  dataArray;
  constructor(private fb:FormBuilder, private _jsonData:ApiService) { }
datamodalobj:data=new data()
dataobject={
  id:'',
  firstname:'',
  lastName:'',
  email:'',
  mobile:'',
  salary:'',
}
headers = ['<input type="checkbox">', 'Header 1', 'Header 2', 'Header 3'];
  ngOnInit(): void {
    this.myReactiveForm=this.fb.group({
      id:[''],
      firstName:[''],
      lastName:[''],
      email:[''],
      mobileNo:[''],
      salary:[''],
    })
    this.getdata();

  }
  onAdd(){
    this.dataobject.firstname=this.myReactiveForm.value.firstName,
    this.dataobject.lastName=this.myReactiveForm.value.lastName,
    this.dataobject.email=this.myReactiveForm.value.email,
    this.dataobject.mobile=this.myReactiveForm.value.mobileNo,
    this.dataobject.salary=this.myReactiveForm.value.salary
    console.log("object data",this.dataobject)

    this._jsonData.postData(this.dataobject).subscribe(res=>{
      console.log("data Added")
      alert("added data")
      this.getdata();
      this.myReactiveForm.reset();
    }),
    err=>{
      console.log("error")
    }

    
  }
  getdata(){
    this._jsonData.getData().subscribe((res)=>{
this.dataArray=res;
    })
  }
deleteData(data:any){
  console.log(data);

  this._jsonData.DeleteData(data.id).subscribe(res=>{
    console.log(res);
    alert("are you sure?")
  })
  this.getdata();
  
}
onEdit(data:any){
 
 


  this.dataobject.id=data.id;
  this.myReactiveForm.controls['firstName'].setValue(data.firstname),
  this.myReactiveForm.controls['lastName'].setValue(data.lastName),
  this.myReactiveForm.controls['email'].setValue(data.email),
  this.myReactiveForm.controls['mobileNo'].setValue(data.mobile),
  this.myReactiveForm.controls['salary'].setValue(data.salary)
}
onUpdate(){
 
  this.dataobject.firstname=this.myReactiveForm.value.firstName,
  this.dataobject.lastName=this.myReactiveForm.value.lastName,
  this.dataobject.email=this.myReactiveForm.value.email,
  this.dataobject.mobile=this.myReactiveForm.value.mobileNo,
  this.dataobject.salary=this.myReactiveForm.value.salary
  this._jsonData.updateData(this.dataobject,this.dataobject.id).subscribe((res)=>{
alert("data updated")
this.getdata();
  })
  err=>{
    alert("can not found data")
  }
}

}

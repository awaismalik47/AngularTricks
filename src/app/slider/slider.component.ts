import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit ,AfterViewInit{
  
  EmailData=[];
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  inputValue:any;
  searchText: string = '';
  filteredItems: string[] = [];
  inputTouched:boolean=false;
  masterArray;
  DropDownDataArray=[

    {email:"awais@gmail.com"},
    { email:"Ibtesam@gmail1.com"},
    { email:"qasir@gmail2.com"},
    { email:"ali@gmail3.com"},
    { email:"usman@gmail4.com"},
    { email:"usama@gmail5.com"},
  ];
  term = 'i';
  noValueFound: Boolean = false;
  // seached 
  constructor(private renderer:Renderer2,) { }
  
  ngOnInit(): void {
    this.masterArray=[...this.DropDownDataArray]
  console.log("Master Array in ngOnit", this.masterArray);
  }
  ngAfterViewInit(): void {
    this.inputTouched=false;
    this.userNameInput.nativeElement.focus();
}
// add To Array 
addToArr(){
  console.log("enter is pressed",this.inputValue)
    this.inputTouched=false
    let obj={
      email:this.inputValue
    }
    this.EmailData.push(obj);
    this.inputValue="";
    console.log("Emial Data Array",this.EmailData)
  }
  // foucs 
  focus(event){
    this.inputTouched=true;
 console.log("clicked on main div")
 this.userNameInput.nativeElement.focus()
 event.stopPropagation();
  }
  // Delete 
  deleteObject(obj: any): void {
    const index = this.EmailData.findIndex(item => item.email === obj.email);
    if (index !== -1) {
      this.EmailData.splice(index, 1);
    }
    console.log("Emial Data Array",this.EmailData)
  }

  // Search
  searchValue(){
    this.inputTouched=true
    console.log("input Field value",this.inputValue);
    if(this.inputValue==""){
      this.inputTouched=false;
      this.DropDownDataArray=[...this.masterArray]
    }
    if(this.DropDownDataArray.length == 0){
      return;
    }
    if(this.masterArray.length == 0 ){
      this.masterArray = [...this.DropDownDataArray];
    }
    console.log('this.' , this.DropDownDataArray);
    console.log("searching values", this.inputValue);
    const res = this.search(this.DropDownDataArray, this.inputValue, "email");
    console.log('respons' , res);
    this.DropDownDataArray = res["searchedArray"];
    if (this.DropDownDataArray.length == 0 && this.inputValue == "") {
      this.DropDownDataArray = [...this.masterArray];
    }
    }
  
    // Search Function
  search(array, term, field = null){
    let newArray = [];
    if(term){
        term.trim();
    }
    if(!term || term ==''){
        return {
            originalArray : array,
            searchedArray : []
        }
    }
    array.forEach(item =>{
        if(!field){
            if(item.toLowerCase().search(term.toLowerCase()) !== -1){
                newArray.push(item)
            }
            return;
        }
        if(item[field].toLowerCase().search(term.toLowerCase()) !== -1){
            newArray.push(item);
        }
    }); // comment added again
    return {
        originalArray : array,
        searchedArray : newArray
    }
}
// Add to Input From Drop Down
addToInputField(data){
console.log("Data after clicking",data)
this.inputValue=data.email;
this.addToArr();
const index = this.DropDownDataArray.findIndex(item => item.email === data.email);
if (index !== -1) {
  this.DropDownDataArray.splice(index, 1);
}
}
}
  


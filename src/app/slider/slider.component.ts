import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @ViewChild('imgsrc') imagesrc
  currentSlideIndex: number = 0;
  selectedImageIndex: number;
  slides = [
    { image: 'assets/images/slider1.jpg' },
    { image: 'assets/images/slider3.jpg' },
    { image: 'assets/images/slider2.jpg' },
    { image: 'assets/images/slide4.jpg' }
  ];
  carouselWidth = '600px';
  carouselHeight = '400px';
  interval = 1000; 
  constructor(private renderer:Renderer2,) { }
  ngAfterViewInit() {
  let getclass=document.getElementsByClassName('carousel-indicators')[0]
    const stylezindex =this.renderer.setStyle(getclass,'columnGap','10px')
   const indicators = document.querySelectorAll('.carousel-indicators');
    if (indicators.length > 0) {
      const ol = indicators[0] as HTMLOListElement;
      const liElements = ol.querySelectorAll('li');   
for (let i = 0; i < liElements.length; i++) {
  const li = liElements[i] as HTMLLIElement;
  li.style.height = '10px';
  li.style.width = '10px';
  li.style.backgroundColor = 'white';
  li.style.borderRadius = '50%';
}
      console.log("li Element",liElements);
    }
    console.log("elmetn in afterviewint",indicators); 

    console.log("image src ",this.imagesrc)
  }
  ngOnInit(): void {
    let element=document.querySelectorAll('.carousel-indicators')
    console.log("elment",element)
  }

  

  selectImage(index: number) {
    this.selectedImageIndex = index;
    console.log("besides images index",index)
  }
  onSlideChange(index: number){
    this.currentSlideIndex = index;
    console.log("Current slide index: ", this.currentSlideIndex);

   
  }

}

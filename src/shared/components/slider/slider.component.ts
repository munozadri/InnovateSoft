import { Component, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'innovation-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 public slideOpts: any
 public isDesktop: boolean = false;
 public isMobile: boolean = false;
  
  

  ngOnInit(): void {
    this.checkScreenWidth();  
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    this.isDesktop = screenWidth >= 992;
    this.isMobile = screenWidth < 991;
  }



  
 


}

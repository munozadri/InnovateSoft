import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'innovation-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public date = new Date();  
  public year: number = -1;
  public isDesktop: boolean = false;
  public isMobile: boolean = false;

  ngOnInit(): void {
  this.year = this.date.getFullYear(); 
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

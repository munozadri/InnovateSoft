import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'innovation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isDesktop: boolean = false;
  public isMobile: boolean = false;
  public itemNav: any[] = [];
  
  ngOnInit(): void {
    this.checkScreenWidth();
    
    this.itemNav.push(
      {
        id: 1,
        title:'Inicio'
      },
      {
        id: 2,
        title:'Productos'
      },
      {
        id: 3,
        title:'Servicios'
      },
      {
        id: 4,
        title:'Contáctanos'
      }
    );
    console.log(this.itemNav)
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

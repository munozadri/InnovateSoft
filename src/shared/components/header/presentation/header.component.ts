import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'innovation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isDesktop: boolean = false;
  public isMobile: boolean = false;
  public itemNav: any[] = [];

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.checkScreenWidth();
    
    this.itemNav.push(
      {
        id: 1,
        title:'Inicio'
      },
      {
        id: 2,
        title:'Nosotros'
      },  
      {
        id: 3,
        title:'Productos & Servicios'
      },   
      {
        id: 4,
        title:'Cotizar'
      },   
      {
        id: 5,
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

  goTo(item: any){
    switch(item.id){
      case 1:{
        this.router.navigateByUrl('/inicio');
      }
      break;
      case 2:{
        this.router.navigateByUrl('/nosotros');
      }
      break;
      case 3:{
        this.router.navigateByUrl('/productos');
      }
      break;
      case 4:{

      }
      break;
      case 5:{

      }
      break;

    }

  }


  

}

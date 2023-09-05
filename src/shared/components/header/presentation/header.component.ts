import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'innovation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public itemNav: any[] = [];

  ngOnInit(): void {
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


  

}

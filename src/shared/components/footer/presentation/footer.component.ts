import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'innovation-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public date = new Date();  
  public year: number = -1;

  ngOnInit(): void {
  this.year = this.date.getFullYear();
 
  }


}

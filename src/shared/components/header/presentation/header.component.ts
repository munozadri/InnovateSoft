import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public isModal: boolean = true;
  public formGroup : FormGroup;
  public whatsappNumber = '5491139573548';

  constructor(
    private router: Router
  ){
    this.formGroup = new FormGroup({
      name: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(20)])),
      surname: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(20)])),
      phone: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(10)])),
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      mensaje: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(500)])),     
    });
  }
  
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
      }     
    );   
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
    }
  }

  sendData(){  
    if(this.formGroup.valid){
      let name = this.formGroup.controls['name'].value;
      let surname = this.formGroup.controls['surname'].value;
      let phone = this.formGroup.controls['phone'].value;
      let email = this.formGroup.controls['email'].value;
      let mensaje = this.formGroup.controls['mensaje'].value
      var message = 'Hola, mi nombre es';
      message += ` ${name + ' ' + surname}, y quiero realizar una consulta y/o cotización relacionada con ${mensaje}.
                        Gracias por su tiempo, anexo mi número de teléfono ${phone} y correo electrónico ${email}. Aguardo su respuesta.`;                 
      const whatsappUrl = `https://wa.me/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }    
  }
}

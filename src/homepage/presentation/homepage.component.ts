import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public isDesktop: boolean = false;
  public isMobile: boolean = false;
  public isModal: boolean = true;
  public formGroup : FormGroup;
  public whatsappNumber = '5491139573548';

  constructor(){
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

    setTimeout(() => {
      this.isModal = false;
    },5000)
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

  sendData(){    
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
 

      

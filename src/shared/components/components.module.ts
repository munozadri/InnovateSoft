import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/presentation/header.component';
import { FooterComponent } from './footer/presentation/footer.component';
import { SliderComponent } from './slider/slider.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SliderComponent],
  imports: [
    CommonModule,    
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[HeaderComponent, FooterComponent,SliderComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

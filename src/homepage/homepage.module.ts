import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { ComponentsModule } from 'src/shared/components/components.module';
import { HomepageComponent } from './presentation/homepage.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ComponentsModule,
    IonicModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageModule { }

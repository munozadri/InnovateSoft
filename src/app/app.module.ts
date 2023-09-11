import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from 'src/shared/components/components.module';
import { HomepageModule } from 'src/homepage/homepage.module';
import { IonicModule } from '@ionic/angular';
import { ProductsModule } from 'src/products/products.module';
import { AboutModule } from 'src/about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AboutModule,
    HomepageModule,
    ProductsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

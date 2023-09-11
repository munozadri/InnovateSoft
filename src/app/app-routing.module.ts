import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/presentation/about.component';
import { HomepageComponent } from 'src/homepage/presentation/homepage.component';
import { ProductsComponent } from 'src/products/presentation/products.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomepageComponent,
    loadChildren: () => import('../homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'nosotros',
    component: AboutComponent,
    loadChildren: () => import('../about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'productos',
    component: ProductsComponent,
    loadChildren: () => import('../products/products.module').then((m) => m.ProductsModule)
  },
  // Otras rutas
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

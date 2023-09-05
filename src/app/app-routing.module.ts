import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/homepage/presentation/homepage.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomepageComponent,
    loadChildren: () => import('../homepage/homepage.module').then((m) => m.HomepageModule)
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateRoutesComponent } from './shared/components/layouts/private-routes/private-routes.component';
import { PublicRoutesComponent } from './shared/components/layouts/public-routes/public-routes.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateRoutesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
  {
    path: 'login',
    component: PublicRoutesComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

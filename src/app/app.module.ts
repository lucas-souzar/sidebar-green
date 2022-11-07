import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateRoutesComponent } from './shared/components/layouts/private-routes/private-routes.component';
import { PublicRoutesComponent } from './shared/components/layouts/public-routes/public-routes.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ProductsComponent } from './views/products/products.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateRoutesComponent,
    PublicRoutesComponent,
    NotFoundComponent,
    SidebarComponent,
    ToolbarComponent,
    ProductsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

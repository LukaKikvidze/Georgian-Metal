import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PartnerModule } from '../partners/partners.module';
import { AboutModule } from '../about/about.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AboutModule,
    PartnerModule
  ]
})
export class HomeModule { }

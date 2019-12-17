import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PagesModule { }

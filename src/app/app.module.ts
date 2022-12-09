import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { FooterComponent } from './footer/footer.component';
import { AnimateModule } from 'primeng/animate';

@NgModule({
  declarations: [AppComponent, HomepageComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    CarouselModule,
    GalleriaModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    AnimateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

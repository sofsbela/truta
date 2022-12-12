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
import { FooterComponent } from './components/footer/footer.component';
import { AnimateModule } from 'primeng/animate';
import { HistoryComponent } from './history/history.component';
import { TeamComponent } from './team/team.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './menu/main/main.component';
import { TooltipModule } from 'primeng/tooltip';
import { WineComponent } from './menu/wine/wine.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReservationDialogComponent } from './components/reservation-dialog/reservation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HistoryComponent,
    TeamComponent,
    MenuComponent,
    MainComponent,
    WineComponent,
    ReservationDialogComponent,
  ],
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
    TooltipModule,
    DialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

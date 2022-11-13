import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadComponent } from './download/download.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';

const routings:Routes = [
    {path: '', component:EventsComponent, pathMatch:"full"},
    {path: 'home', component:EventsComponent},
    {path: 'events', component:EventsComponent},
    {path: 'download', component:DownloadComponent},
    {path: 'aboutus', component:AboutusComponent},
    {path: 'contactus', component:ContactusComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    FooterComponent,
    DownloadComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routings)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

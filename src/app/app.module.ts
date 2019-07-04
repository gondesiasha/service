import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TheatresComponent } from './theatres/theatres.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { movieService } from '../app/app.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TheatresComponent,
    BookingComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [movieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

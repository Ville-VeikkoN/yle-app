import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RadioChannelsComponent } from './components/radio-channels/radio-channels.component';
import { TvProgramsComponent } from './components/tv-programs/tv-programs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { GuideComponent } from './components/guide/guide.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TimeFormatPipe } from './pipes/time-format.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TvProgramsComponent,
    RadioChannelsComponent,
    NotFoundComponent,
    GuideComponent,
    DateFormatPipe,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

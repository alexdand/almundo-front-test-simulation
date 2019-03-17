import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HotelComponent } from "./components/hotel/hotel.component";
import { HotelListComponent } from "./components/hotel-list/hotel-list.component";
import { HotelHeaderComponent } from './components/hotel-header/hotel-header.component';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';

@NgModule({
  declarations: [AppComponent, HotelComponent, HotelListComponent, HotelHeaderComponent, HotelSearchComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

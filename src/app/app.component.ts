import { Component, OnInit } from "@angular/core";
import { HOTELS } from "./hotels";
import { Hotel } from "./interfaces/hotel.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  hotels: Hotel[];
  displayedHotels: Hotel[];

  onHotelNameEnter(event: string) {
    console.log(`Hotel name from app component: ${event}`);
    this.displayedHotels = this.hotels.filter(hotel =>
      hotel.name.includes(event)
    );
  }

  ngOnInit() {
    this.hotels = HOTELS;
    this.displayedHotels = HOTELS;
  }
}

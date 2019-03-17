import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from "../../interfaces/hotel.interface";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.scss"]
})
export class HotelComponent implements OnInit {
  @Input()
  hotel: Hotel;

  constructor() {}

  ngOnInit(): void {
    // setInterval(() => {
    //   this.hotel = {
    //     name: "The Cameroon",
    //     image:
    //       "https://images.freeimages.com/images/large-previews/345/colonial-hotel-1442487.jpg",
    //     price: 10000,
    //     stars: 5
    //   };
    // }, 2000);
  }
}

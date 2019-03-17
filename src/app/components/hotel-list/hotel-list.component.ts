import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from "src/app/interfaces/hotel.interface";

@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.scss"]
})
export class HotelListComponent implements OnInit {
  @Input()
  hotels: Hotel[];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hotel-search",
  templateUrl: "./hotel-search.component.html",
  styleUrls: ["./hotel-search.component.scss"]
})
export class HotelSearchComponent implements OnInit {
  @Output()
  hotelNameEnter = new EventEmitter<string>();
  userInput: string = "";

  constructor() {}

  ngOnInit() {}

  onKey(event: any): void {
    this.userInput = event.target.value;
    console.log(this.userInput);
    this.hotelNameEnter.emit(this.userInput);
  }
}

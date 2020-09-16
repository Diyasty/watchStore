import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.scss"],
})
export class StarsComponent implements OnInit {
  constructor() {}
  starClassName = "star-rating-blank";
  @Input() starId;
  @Input() rating;

  @Output() leave: EventEmitter<number> = new EventEmitter();
  @Output() enter: EventEmitter<number> = new EventEmitter();
  @Output() bigClick: EventEmitter<number> = new EventEmitter();
  ngOnInit() {
    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }
  }

  onenter() {
    this.enter.emit(this.starId);
  }

  onleave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  iconColor: string;
  @Input()
  count: number;
  @Input()
  set voted(value: boolean) {
    this.iconColor = value ? "red" : "white";
  };
  @Output()
  vote = new EventEmitter();

  onClick() {
    this.vote.emit("vote");
  }
}

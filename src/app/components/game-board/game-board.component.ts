import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  @Output() optionSelectedEvent = new EventEmitter();

  optionSelected(option: string) {
    this.optionSelectedEvent.emit(option);
  }
}

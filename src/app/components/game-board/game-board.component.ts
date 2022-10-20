import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  @Input() rulesModalActive: boolean = false;

  @Output() optionSelectedEvent = new EventEmitter();

  optionSelected(option: string) {
    if(!this.rulesModalActive) this.optionSelectedEvent.emit(option);
  }
}

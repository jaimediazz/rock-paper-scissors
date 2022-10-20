import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRulesModal: boolean = false;
  showGameResult: boolean = false;
  scoreValue: number = 0;
  optionSelectedValue: string = '';

  optionSelected(option: string) {
    this.showGameResult = true;
    this.optionSelectedValue = option;
  }

  newGame(result: string) {
    this.showGameResult = false;
    if(result === 'YOU WIN') this.scoreValue++;
  }
}

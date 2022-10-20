import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {
  @Input() playerOption: string = '';

  houseOptions: Array<string> = ['paper','rock','scissors'];
  houseOption: string = '';
  resultText: string = '';
  
  ngOnInit(): void {
    setTimeout(() => {
      this.houseOptionSelection()
    }, 1000);
  }

  houseOptionSelection() {
    let randomNumber = Math.floor(Math.random()*3);

    this.houseOption = this.houseOptions[randomNumber]; 
    console.log("house picked: " + this.houseOption);
    this.winner();
  }

  outerContainerClass() {
    return this.playerOption === 'paper' ? 'paper-container' : this.playerOption === 'rock' ? 'rock-container' : 'scissors-container';
  }

  containerImage() {
    return this.playerOption === 'paper' ? '../../../assets/icon-paper.svg' 
      : this.playerOption === 'rock' ? '../../../assets/icon-rock.svg' : '../../../assets/icon-scissors.svg'
  }

  outerHouseContainerClass() {
    return this.houseOption === 'paper' ? 'paper-container' : this.houseOption === 'rock' ? 'rock-container' : 'scissors-container';
  }

  houseContainerImage() {
    return this.houseOption === 'paper' ? '../../../assets/icon-paper.svg' 
      : this.houseOption === 'rock' ? '../../../assets/icon-rock.svg' : '../../../assets/icon-scissors.svg'
  }  

  winner() {
    if(this.playerOption === this.houseOption) {
      this.resultText = 'TIE';
    } else if(this.playerOption === 'paper') {
      if(this.houseOption === 'rock') {
        this.resultText = 'YOU WIN';
      } else if(this.houseOption === 'scissors') {
        this.resultText = 'YOU LOSE';
      }
    } else if(this.playerOption === 'rock') {
      if(this.houseOption === 'scissors') {
        this.resultText = 'YOU WIN';
      } else if(this.houseOption === 'paper') {
        this.resultText = 'YOU LOSE';
      }
    } else if(this.playerOption === 'scissors') {
      if(this.houseOption === 'paper') {
        this.resultText = 'YOU WIN';
      } else if(this.houseOption === 'rock') {
        this.resultText = 'YOU LOSE';
      }
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {
  @Input() playerOption: string = '';
  
  ngOnInit(): void {
    setTimeout(() => {
      this.playerOption = 'prueba'
    }, 1000)
  }

}

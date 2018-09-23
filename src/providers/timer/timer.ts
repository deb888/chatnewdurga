import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

/*
  Generated class for the TimerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimerProvider {
  private play: boolean = false;
  private pause: boolean = false;
  private stop: boolean = true;
  public playPauseStop$ = new EventEmitter();
  constructor(public http: HttpClient) {
    console.log('Hello TimerProvider Provider');
  }
  public playTimer() {
    console.log('start play on');
    this.play = true;
    this.pause = false;
    this.stop = false;

    this.playPauseStop$.emit({
      play: this.play
    });
  }

  public pauseTimer() {
    this.play = false;
    this.pause = true;
    this.stop = false;

    this.playPauseStop$.emit({
      pause: this.pause
    });
  }

  public stopTimer() {
    console.log('start play off');
    this.play = false;
    this.pause = false;
    this.stop = true;

    this.playPauseStop$.emit({
      stop: this.stop
    });
  }

}

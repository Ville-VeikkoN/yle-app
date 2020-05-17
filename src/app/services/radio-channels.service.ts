import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadioChannelsService {
  constructor(private http: HttpClient) { }

  fetchRadioChannel(radioChannel, callBackFunction: (result) => void): void {
    this.http.get(`http://localhost:3000/radio/${radioChannel}`).subscribe(response => {
      callBackFunction(response);
    });
  }

  fetchRadioNowPlaying(radioChannel, callBackFunction: (result) => void): void {
    this.http.get(`http://localhost:3000/radio/nowplaying/${radioChannel}`).subscribe(response => {
      callBackFunction(response);
    });
  }

}

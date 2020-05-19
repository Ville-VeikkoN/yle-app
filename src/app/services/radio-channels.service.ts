import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadioChannelsService {
  constructor(private http: HttpClient) { }

  fetchRadioChannel(radioChannel: string, callBackFunction: (result) => void): void {
    this.http.get(`/radio/${radioChannel}`).subscribe(response => {
      callBackFunction(response);
    });
  }

  fetchRadioNowPlaying(radioChannel: string, callBackFunction: (result) => void): void {
    this.http.get(`/radio/nowplaying/${radioChannel}`).subscribe(response => {
      callBackFunction(response);
    });
  }

}

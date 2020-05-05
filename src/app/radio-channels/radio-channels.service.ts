import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadioChannelsService {
  constructor(private http: HttpClient) { }

  fetchRadioChannels(callBackFunction: (result) => void): void {
    this.http.get('http://localhost:3000/radio').subscribe(response => {
      callBackFunction(response);
    });
  }

}

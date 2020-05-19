import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvProgramsService {
  constructor(private http: HttpClient) { }

  fetchTvChannels(callBackFunction: (result) => void) {
    this.http.get('http://localhost:3000/tv').subscribe(response => {
      callBackFunction(response);
    });
  }

  fetchChannelTV1(callBackFunction: (result) => void): void {
    this.http.get('http://localhost:3000/yletv1').subscribe(response => {
      callBackFunction(response);
    });
  }

  fetchChannelTV2(callBackFunction: (result) => void): void {
    this.http.get('http://localhost:3000/yletv2').subscribe(response => {
      callBackFunction(response);
    });
  }
  fetchYleAreena(callBackFunction: (result) => void): void {
    this.http.get('http://localhost:3000/yleareena').subscribe(response => {
      callBackFunction(response);
    });
  }

  fetchSearchedPrograms(searchValue: string, callBackFunction: (result) => void): void {
    this.http.get(`http://localhost:3000/searched/${searchValue}`).subscribe(response => {
      console.log(response);
      callBackFunction(response);
    });
  }

}

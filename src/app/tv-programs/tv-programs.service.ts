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

}

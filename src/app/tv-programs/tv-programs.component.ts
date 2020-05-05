import { Component, OnInit } from '@angular/core';
import { TvProgramsService } from './tv-programs.service';

@Component({
  selector: 'app-tv-programs',
  templateUrl: './tv-programs.component.html',
  styleUrls: ['./tv-programs.component.css']
})
export class TvProgramsComponent implements OnInit {

  programsArray = [];

  constructor(private tvProgramsService: TvProgramsService) { }

  ngOnInit() {
    this.tvProgramsService.fetchTvChannels((res) => {
      this.programsArray = JSON.parse(res).data;
    });
  }

}

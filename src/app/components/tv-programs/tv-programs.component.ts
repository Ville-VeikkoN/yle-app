import { Component, OnInit } from '@angular/core';
import { TvProgramsService } from '../../services/tv-programs.service';

@Component({
  selector: 'app-tv-programs',
  templateUrl: './tv-programs.component.html',
  styleUrls: ['./tv-programs.component.css']
})
export class TvProgramsComponent implements OnInit {

  programsArray = [];

  searchValue = 'Poiminnat';

  constructor(private tvProgramsService: TvProgramsService) { }

  ngOnInit() {
    this.tvProgramsService.fetchTvChannels((res) => {
      this.programsArray = JSON.parse(res).data;
    });
  }

  doSearch(value) {
    if (value !== '') {
      this.searchValue = value;
      this.tvProgramsService.fetchSearchedPrograms(this.searchValue, (res) => {
        this.programsArray = JSON.parse(res).data;
      });
    } else {
      this.searchValue = 'poiminnat';
    }
  }

}

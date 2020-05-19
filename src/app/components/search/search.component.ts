import { Component, OnInit } from '@angular/core';
import { TvProgramsService } from '../../services/tv-programs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

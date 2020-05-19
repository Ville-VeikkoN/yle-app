import { Component, OnInit } from '@angular/core';
import { TvProgramsService } from '../../services/tv-programs.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  yleTv1Programs = [];
  yleTv2Programs = [];
  yleAreenaPrograms = [];

  constructor(private tvProgramsService: TvProgramsService) { }

  ngOnInit() {
    this.tvProgramsService.fetchChannelTV1((res) => {
      this.yleTv1Programs = JSON.parse(res).data;
    });

    this.tvProgramsService.fetchChannelTV2((res) => {
      this.yleTv2Programs = JSON.parse(res).data;
    });

    this.tvProgramsService.fetchYleAreena((res) => {
      this.yleAreenaPrograms = JSON.parse(res).data;
    });
  }

  checkProgramNotEnded(endTime) {
    const currentTime = new Date();
    const programEndTime = new Date(endTime);
    if (programEndTime > currentTime) {
      return true;
    }
    return false;
  }

}

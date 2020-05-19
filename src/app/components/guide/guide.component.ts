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
  currentTime = new Date();

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
    const programEndTime = new Date(endTime);
    if (programEndTime > this.currentTime) {
      return true;
    }
    return false;
  }

}

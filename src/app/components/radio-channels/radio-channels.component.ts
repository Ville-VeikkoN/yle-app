import { Component, OnInit } from '@angular/core';
import { RadioChannelsService } from '../../services/radio-channels.service';

@Component({
  selector: 'app-radio-channels',
  templateUrl: './radio-channels.component.html',
  styleUrls: ['./radio-channels.component.css']
})
export class RadioChannelsComponent implements OnInit {
  title = 'radio';

  channel = 'ylex';
  radioData;
  nowPlaying;
  constructor(private radioChannelsService: RadioChannelsService) { }

  ngOnInit() {
    this.radioChannelsService.fetchRadioChannel(this.channel , (res) => {
      this.radioData = JSON.parse(res).data;
    });

    this.radioChannelsService.fetchRadioNowPlaying(this.channel , (res) => {
      this.nowPlaying = JSON.parse(res).data;
      console.log(this.nowPlaying)
    });
  }

}

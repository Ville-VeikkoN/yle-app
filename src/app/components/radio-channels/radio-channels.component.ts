import { Component, OnInit } from '@angular/core';
import { RadioChannelsService } from '../../services/radio-channels.service';

@Component({
  selector: 'app-radio-channels',
  templateUrl: './radio-channels.component.html',
  styleUrls: ['./radio-channels.component.css']
})
export class RadioChannelsComponent implements OnInit {
  title = 'radio';

  radioArray = [];

  constructor(private radioChannelsService: RadioChannelsService) { }

  ngOnInit() {
    this.radioChannelsService.fetchRadioChannels((res) => {
      this.radioArray = JSON.parse(res).data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MarsRoverPhotosService } from './services/mars-rover-photos.service';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title!: string;
  photoData!: any;
  date = '2015-6-3';

  constructor(
    private titleService: TitleService,
    private marsRoverPhotosService: MarsRoverPhotosService
  ) {}

  ngOnInit() {
    this.title = this.titleService.getAppTitle();
    // this.marsRoverPhotosService
    //   .getPhotosFromDate('2015-6-30')
    //   .subscribe((photos) => {
    //     this.photos = photos;
    //   });
  }

  fetchImages() {
    this.marsRoverPhotosService
      .getPhotosFromDate(this.date)
      .subscribe((photoData) => {
        this.photoData = photoData;
      });
  }
}

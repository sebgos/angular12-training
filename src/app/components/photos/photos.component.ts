import { PhotosService } from 'src/app/services/photos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/modela/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos!: Observable<Photo[]>;
  albumId!: string;
  constructor(
    private readonly photosService: PhotosService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this.photosService.getPhotos(this.albumId);
  }
}

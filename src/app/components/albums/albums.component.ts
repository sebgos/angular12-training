import { PhotosService } from 'src/app/services/photos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/modela/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums!: Observable<Album[]>;
  constructor(private readonly photosService: PhotosService) {}

  ngOnInit(): void {
    this.albums = this.photosService.getAlbums();
  }
}

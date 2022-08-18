import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private readonly http: HttpClient) {}

  getAlbums() {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
  getPhotos(albumId: string) {
    const params = new HttpParams().set('albumId', albumId);
    return this.http.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos',
      {
        params,
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { switchMap, map, tap, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'angular12-training';
  data: any;

  ngOnInit() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/albums')
      .pipe(
        map((albums) => albums[0]),
        tap((firstAlbum) => console.log(firstAlbum)),
        switchMap((firstAlbum) =>
          this.http.get<any[]>(
            `https://jsonplaceholder.typicode.com/photos?albumId=${firstAlbum.id}`
          )
        ),
        tap((photos) => console.log(photos))
      )
      .subscribe((data) => (this.data = data));
  }
}

import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {forkJoin, from, fromEvent, Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, pluck, takeUntil, tap} from "rxjs/operators";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  // Exclamation mark is the Non-null assertion operator, which tells Typescript that the value won't be undefined
  @ViewChild('search') search!: ElementRef;
  // A Subject is like an Observable, but can multicast to many Observers.
  // Subjects are like EventEmitters: they maintain a registry of many listeners.
  private readonly destroy$ = new Subject();

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.destroy$),
        pluck('srcElement', 'value'),
        filter((val) => (val as string).length > 2),
        debounceTime(500),
        distinctUntilChanged(),
        tap(console.log)
      )
      .subscribe();
  }

  ngOnInit() {
    this.getPosts().subscribe(res => {4
      console.log(res);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getPosts(): Observable<Post[]> {
    return from(fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()));
  }

  getPostsExplicit() {
    return this.getPosts()
      .subscribe({
        next: res => console.log('next', res),
        error: err => console.log('error', err),
        complete: () => console.log('complete')
      });
  }

  getUserPosts(id: number): Observable<Post[]> {
    return this.getPosts()
      .pipe(
        takeUntil(this.destroy$),
        map(posts => posts.filter((post: Post) => post.userId === id)),
      )
  }

  getUnion(a: number, b: number): Observable<Post[]> {
    return forkJoin({
      sourceOne: this.getUserPosts(a),
      sourceTwo: this.getUserPosts(b)
    }).pipe(
      takeUntil(this.destroy$),
      map(sources => [...sources.sourceOne, ...sources.sourceTwo])
    )
  }
}

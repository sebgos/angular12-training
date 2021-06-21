import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor() {}

  getAppTitle() {
    return 'angular12-training';
  }
}

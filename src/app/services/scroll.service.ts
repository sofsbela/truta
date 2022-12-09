import { Injectable } from '@angular/core';
import {
  distinctUntilChanged,
  fromEvent,
  map,
  shareReplay,
  startWith,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  public readonly windowScroll$ = fromEvent(window, 'scroll').pipe(
    map((x) => window.scrollY),
    startWith(0),
    distinctUntilChanged(),
    shareReplay(1)
  );
}

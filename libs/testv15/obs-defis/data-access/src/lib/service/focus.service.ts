import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  merge,
  of,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FocusService {
  constructor(
    @Inject(DOCUMENT) public docRef: Document 
  ) {}

  focus(ref: ElementRef<HTMLElement>) {
    return merge(
      fromEvent(this.docRef, 'focusin'),
      fromEvent(this.docRef, 'focusout'),
      of(null)
    ).pipe(
      debounceTime(0),
      map(() =>
        ref.nativeElement.contains(this.docRef.activeElement)
          ? this.docRef.activeElement
          : null
      ),
      distinctUntilChanged()
    );
  }
}

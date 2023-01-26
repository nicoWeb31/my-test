import { DOCUMENT } from "@angular/common";
import { inject, InjectionToken } from "@angular/core";
import { distinctUntilChanged, fromEvent, map, Observable, share, startWith } from "rxjs";

//token with factory
export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
  'shard obsVisibility',
  {
    factory: () => {
      const docRf = inject(DOCUMENT);

      return fromEvent(docRf, 'visibilitychange').pipe(
        startWith(0),
        map(() => docRf.visibilityState !== 'hidden'),
        distinctUntilChanged(),
        share()
      );
    },
  }
);
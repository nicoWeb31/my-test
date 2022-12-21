import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, inject, NgZone } from '@angular/core';
import { table } from 'console';
import { take } from 'rxjs';

@Directive({
  selector: '[myTestEvent]',
  standalone: true,
  providers: [],
})
export class EventDirective {
  private readonly domaine = 'my-domaine';
  data: any;

  // constructor(private http : HttpClient, private zone : NgZone){}

  http = inject(HttpClient);
  zone = inject(NgZone);

  @HostListener('click')
  onClick() {
    if (!this.data) {
      throw new Error('data must be defined');
    }
    this.zone.runOutsideAngular(() => {//zone for run outside angular and not rerender the changeDetection
      this.http
        .post(this.domaine, {
          user: 'toto',
          data: this.data,
        })
        .pipe(take(1))
        .subscribe();
    });
  }
}

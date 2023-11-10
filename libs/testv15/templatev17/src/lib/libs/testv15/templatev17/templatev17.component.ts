import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, interval, of } from 'rxjs';
import { Badg2Component } from './component/badg2.component';
import { Badg3Component } from './component/badg3.component';
import { Badg4Component } from './component/badg4.component';
import { Badg5Component } from './component/badg5.component';
import { Badg6Component } from './component/badg6.component';
import { Badg7Component } from './component/badg7.component';
import { BadgsComponent } from './component/badgs.component';
import { SpinnerComponent } from './component/spinner.component';

@Component({
  selector: 'lib-templatev17',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent,
    BadgsComponent,
    Badg2Component,
    Badg3Component,
    Badg4Component,
    Badg6Component,
    Badg5Component,
    Badg7Component,
  ],
  template: `
    <div>
      <h2 class="text-center text-3xl font-bold underline">IF</h2>

      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        @if (testVu()) {
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">IFFFFFF</div>
          </div>
        </div>
        } @else {
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">ELESSSSSSSS</div>
          </div>
        </div>

        }

        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          (click)="toggleTestSignal()"
        >
          click
        </button>
      </div>
      <div class="divide-x-0 mt-14"></div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">FOR</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <ul>
            @for (notification of notificationsVu(); track notification.id) {
            <li>
              <h2>{{ $index + 1 }}: {{ notification.message }}</h2>
              <button (click)="removeItems(notification.id)">remove</button>
            </li>
            } @empty {
            <li>No items to display.</li>
            }
          </ul>
        </div>
      </div>
      <div class="divide-x-0 mt-14"></div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">SWITCHCASE</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div>
            @switch (userStatusVU()) { @case ('active') {
            <span>User is active</span>
            } @case ('inactive') {
            <span>User is inactive</span>
            } @default {
            <span>Status unknown</span>
            } }
          </div>
        </div>
      </div>

      <!-- https://netbasal.com/a-comprehensive-guide-to-angulars-defer-block-468c74048df4 -->
      <div class="divide-x-0 mt-14"></div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">DEFER1</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div>
            <!-- load after condition -->
            @defer(when ok()) {
            <lib-badgs/>
            }
            @loading {
              <lib-spinner/>
              Loading...
            }
            @placeholder {
            Placeholder
            }
            @error {
            Failed to load dependencies
            }
            <button (click)="ok.set(!ok())"> ok </button>
          </div>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">DEFER2</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div>
            <!-- In the code above, the combination of the @defer block with the "on immediate" condition guarantees that the component is instantly rendered once it undergoes lazy-loading. -->
            @defer(on immediate) {
            <lib-badg2/>
            }
            @loading {
              <lib-spinner/>
              Loading...
            }
            @placeholder {
            Placeholder
            }
            @error {
            Failed to load dependencies
            }
          </div>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">DEFER3</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div>
            <!-- Here, the component is loaded and rendered during browser idle times, leveraging the requestIdleCallback API. -->
            @defer(on idle) {
            <lib-badg3/>
            }
            @loading {
              <lib-spinner/>
              Loading...
            }
            @placeholder {
            Placeholder
            }
            @error {
            Failed to load dependencies
            }
          </div>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">DEFER4</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div>
            <!-- In this example, the component loading and rendering is deferred and will only render once the button, denoted by the #trigger reference,
             is clicked. Until that interaction, the @placeholder block showcases the "Placeholder" content. Supported interaction events include click, focus, touch, and input. -->
            @defer (on interaction(trigger)) {
            <lib-badg4 />
            }
            @placeholder { 
            Placeholder
          <!-- in or out placeholder -->
            <button #trigger>Trigger</button>
            }

          </div>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">DEFER5</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div>
            <!-- hover -->
            @defer (on hover(over)) {
              <lib-badg5 />
            } @placeholder {
            Placeholder
          }
          <!-- in or out placeholder -->
          <button #over> lazy load </button>
          </div>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">DEFER6</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div>
            <!-- Angular’s defer block also provides the capability to delay the rendering of content based on a timer.
             This can be particularly useful in scenarios where you want to stagger the loading of multiple components or introduce a delay before a component is rendered,
              enhancing the user experience with controlled and timed content display:-->
              @defer (on timer(2000ms)) {
                <lib-badg6/>
              } @placeholder {
              Placeholder
              }
          </div>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <h2 class="text-center text-3xl font-bold underline">DEFER7</h2>
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
          <div>
            <!-- The @defer (on viewport(trigger)) block ensures that the component is rendered only when the div (identified by the #trigger template reference variable) enters the viewport. -->
          @defer (on viewport(trigger)) {
            <lib-badg7 />
          } @placeholder {
             Placeholder
         }
         <!--when enters the viewport. -->
            <div #trigger style="margin-top: 1500px">Content</div> 
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Templatev17Component implements OnInit {
  private readonly ngRef = inject(DestroyRef);
  ok = signal(false);
  hasFetchedData$ = of("Defer c'est genial").pipe(delay(5000));

  testSignal = signal<boolean>(false);
  testVu = this.testSignal.asReadonly();

  notificationsSignal = signal<{ id: number; message: string }[]>([
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
    { id: 3, message: 'Notification 3' },
    { id: 4, message: 'Notification 4' },
    { id: 5, message: 'Notification 5' },
    { id: 6, message: 'Notification 6' },
    { id: 7, message: 'Notification 7' },
    { id: 8, message: 'Notification 8' },
    { id: 9, message: 'Notification 9' },
    { id: 10, message: 'Notification 10' },
  ]);
  notificationsVu = this.notificationsSignal.asReadonly();

  userStatusSignal = signal<'active' | 'inactive'>('active');
  userStatusVU = this.userStatusSignal.asReadonly();

  ngOnInit(): void {
    interval(3000)
      .pipe(takeUntilDestroyed(this.ngRef))
      .subscribe(() => {
        const randomStatus = Math.random() < 0.5 ? 'active' : 'inactive';
        this.updadateUserStatus(randomStatus);
      });
  }

  toggleTestSignal() {
    this.testSignal.set(!this.testVu());
  }

  removeItems(index: number): void {
    this.notificationsSignal.update((notifications) =>
      notifications.filter((notification) => notification.id !== index)
    );
  }

  updadateUserStatus(status: 'active' | 'inactive') {
    this.userStatusSignal.update(() => status);
  }
}

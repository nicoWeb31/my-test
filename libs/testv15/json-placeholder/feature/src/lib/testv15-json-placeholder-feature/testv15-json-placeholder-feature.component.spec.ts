import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Testv15JsonPlaceholderFeatureComponent } from './testv15-json-placeholder-feature.component';
import { provideAutoSpy, Spy } from 'jest-auto-spies';
import { SpawnSyncOptions } from 'child_process';
import { Store, StoreModule } from '@ngrx/store';

// https://timothycurchod.com/writings/testing-ngrx
// https://medium.com/@bo.vandersteene/mock-your-ngrx-store-on-the-easy-way-68c66d4bea63
//https://www.youtube.com/watch?v=Jw4WEIBmiDU

describe('Testv15JsonPlaceholderFeatureComponent', () => {
  let component: Testv15JsonPlaceholderFeatureComponent;
  let fixture: ComponentFixture<Testv15JsonPlaceholderFeatureComponent>;
  let postSpyStore: Spy<Store>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Testv15JsonPlaceholderFeatureComponent,
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [
        // provideMockStore({}),
        // provideAutoSpy(Store),
        
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Testv15JsonPlaceholderFeatureComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<any>(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain <p>', () => {
    const element = fixture.nativeElement;
    const p = element.querySelector('p');
    expect(p).toBeTruthy();
  });

  it('should not contain <div>', () => {
    const element = fixture.nativeElement;
    const p = element.querySelector('div');
    expect(p).toBeFalsy();
  });

  it('should return post$', () => {});
});

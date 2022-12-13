import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { postsSelector } from '@my-test/testv15/json-placeholder/data-access';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Testv15JsonPlaceholderFeatureComponent } from './testv15-json-placeholder-feature.component';
// https://timothycurchod.com/writings/testing-ngrx
// https://medium.com/@bo.vandersteene/mock-your-ngrx-store-on-the-easy-way-68c66d4bea63
//https://www.youtube.com/watch?v=Jw4WEIBmiDU


describe('Testv15JsonPlaceholderFeatureComponent', () => {
  let component: Testv15JsonPlaceholderFeatureComponent;
  let fixture: ComponentFixture<Testv15JsonPlaceholderFeatureComponent>;


  let mockStore: MockStore<any>;
  let mockSelector: MemoizedSelector<any, any>;
  const initialState = {
    posts: [],
    error: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        Testv15JsonPlaceholderFeatureComponent,
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore({
          initialState,
        }),
      ],
    }).compileComponents();


    fixture = TestBed.createComponent(Testv15JsonPlaceholderFeatureComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockSelector = mockStore.overrideSelector(postsSelector, []);
    fixture.detectChanges();
  });
  it('@input should be equal toto ', () => {
    const element = fixture.nativeElement;
    component.message = 'toto';//set input value
    fixture.detectChanges();//detection change
    const message = element.querySelector('span');//get value 
    expect(message.textContent).toBe('toto');//expect 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain value ', () => {
    const element = fixture.nativeElement;
    const p = element.querySelector('p');
    expect(p.textContent).toBe('testv15-json-placeholder-feature works!');
  });

  it('should not contain <div>', () => {
    const element = fixture.nativeElement;
    const p = element.querySelector('div');
    expect(p).toBeFalsy();
  });

  it('store should return list of post$ empty', (done) => {
    component.store.subscribe((store) => {
      expect(store.posts.length).toEqual(0);
      done();
    });
  });

  it('store should return list of post$', (done) => {
    component.store.subscribe((store) => {
      expect(store.posts.length).toBe(0);
    });

    const newMockState = {
      ...initialState,
      posts: ['a'],
    };
    mockStore.setState(newMockState);

    component.store.subscribe((store) => {
      expect(store.posts.length).toBe(1);
    });
    done();
  });

  it('selector should return list of post$ empty', (done) => {
    component.posts$.subscribe((posts) => {
      expect(posts.length).toEqual(0);
      done();
    });
  });
  it('selector should return list of post$', (done) => {
    mockSelector.setResult(['a', 'b', 'c']); //maj selector values
    fixture.detectChanges();
    mockStore.refreshState();

    component.posts$.subscribe((posts) => {
      expect(posts.length).toEqual(3);
      done();
    });
  });
});

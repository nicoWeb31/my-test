import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Testv15JsonPlaceholderFeatureComponent } from './testv15-json-placeholder-feature.component';
describe('Testv15JsonPlaceholderFeatureComponent', () => {
  let component: Testv15JsonPlaceholderFeatureComponent;
  let fixture: ComponentFixture<Testv15JsonPlaceholderFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Testv15JsonPlaceholderFeatureComponent,
        HttpClientTestingModule,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(Testv15JsonPlaceholderFeatureComponent);
    component = fixture.componentInstance;
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
});

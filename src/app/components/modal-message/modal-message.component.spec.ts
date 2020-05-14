import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertModalMessageComponent } from './modal-message.component';

describe('AlertMessageComponent', () => {
  let component: AlertModalMessageComponent;
  let fixture: ComponentFixture<AlertModalMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertModalMessageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertModalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

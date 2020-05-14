import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartModalComponent } from './modal-cart.component';

describe('CartComponent', () => {
  let component: CartModalComponent;
  let fixture: ComponentFixture<CartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

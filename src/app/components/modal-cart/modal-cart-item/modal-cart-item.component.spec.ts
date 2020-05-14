import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCartItemComponent } from './modal-cart-item.component';

describe('CartItemComponent', () => {
  let component: ModalCartItemComponent;
  let fixture: ComponentFixture<ModalCartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCartItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

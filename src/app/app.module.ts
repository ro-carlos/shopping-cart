import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
// Material UI Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalCartItemComponent } from './components/modal-cart/modal-cart-item/modal-cart-item.component';
import { CartModalComponent } from './components/modal-cart/modal-cart.component';
import { AlertModalMessageComponent } from './components/modal-message/modal-message.component';
import { NavComponent } from './components/nav/nav.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const angular_material = [
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartModalComponent,
    ModalCartItemComponent,
    ProductItemComponent,
    AlertModalMessageComponent,
    PaginationComponent,
    CartPreviewComponent,
  ],
  entryComponents: [AlertModalMessageComponent, CartModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    angular_material,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

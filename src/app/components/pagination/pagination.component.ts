import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ErrorService } from 'src/app/services/error.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() requestPage: Observable<any>;
  @Input() offset = 3;
  @Output() appChangeValue: EventEmitter<Array<any>> = new EventEmitter();

  items: Array<any> = [];
  nextKey: string;
  prevKeys: Array<string> = [];
  subscription: any;

  constructor(
    private loadingService: LoadingService,
    private errorService: ErrorService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getProducts('1');
  }

  nextPage() {
    this.prevKeys.push(this.items[0].id + '');
    this.getProducts(this.nextKey);
  }

  prevPage() {
    const prevKey = this.prevKeys[this.prevKeys.length - 1];
    this.prevKeys.pop();
    this.getProducts(prevKey);
  }

  getProducts(key?: string) {
    this.loadingService.present();
    this.productService
      .getProducts(key, this.offset)
      .pipe(
        map(this.errorService.detectGenericError),
        catchError(this.errorService.handleGenericError)
      )
      .subscribe((response: Array<Product>) => {
        this.loadingService.dismiss();
        this.items = response.slice(0, this.offset);
        this.nextKey =
          response.length - 1 === this.offset
            ? response[response.length - 1].id + ''
            : null;
        console.log('RESPONSE products', response);
        this.appChangeValue.emit(this.items);
      });
  }
}

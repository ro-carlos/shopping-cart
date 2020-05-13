import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ErrorService } from 'src/app/services/error.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() requestPage = (key: string, offset: number): Observable<any> => null;
  @Input() offset = 3;

  items: Array<any> = [];
  nextKey: string;
  prevKeys: Array<string> = [];

  constructor(
    private loadingService: LoadingService,
    private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.getItems('1');
  }

  nextPage() {
    this.prevKeys.push(this.items[0].id + '');
    this.getItems(this.nextKey);
  }

  prevPage() {
    const prevKey = this.prevKeys[this.prevKeys.length - 1];
    this.prevKeys.pop();
    this.getItems(prevKey);
  }

  getItems(key?: string) {
    this.loadingService.present();
    this.requestPage(key, this.offset)
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
        console.log('RESPONSE items', response);
      });
  }
}

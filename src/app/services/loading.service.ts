import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}
  private presenting = false;

  private triggerLoadingModal = new Subject<boolean>();
  triggerLoadingModal$ = this.triggerLoadingModal.asObservable();

  present() {
    if (!this.presenting) {
      this.triggerLoadingModal.next(true);
      this.presenting = true;
    }
  }

  dismiss() {
    if (this.presenting) {
      this.triggerLoadingModal.next(false);
      this.presenting = false;
    }
  }
}

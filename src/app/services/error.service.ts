import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { AlertMessageComponent } from '../components/alert-message/alert-message.component';
import { BackendError } from '../models/backend-error';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private presentingModal = false;

  constructor(
    private loadingService: LoadingService,
    private dialog: MatDialog
  ) {}

  detectGenericError = (response: any) => {
    if (response && response[0] && response[0].codigoError) {
      console.error('RESPONSE:', response);
      const error: Error = response;
      // const error = new BackendError(1, '001', 1, ' Specific Backend Error');
      throw error;
    }
    return response;
  };

  handleGenericError = (error: BackendError) => {
    error.errorCode = error.errorCode ? error.errorCode : '001';
    this.displayModal(error);
    this.loadingService.dismiss();
    return throwError(error);
  };

  private displayModal(error: BackendError, cancelAction?, acceptOpcion?) {
    this.presentingModal = true;
    const dialogRef = this.dialog.open(AlertMessageComponent, {
      width: '350px',
      panelClass: 'dialog-panel',
      data: { error, cancelAction, acceptOpcion },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      this.presentingModal = false;
    });
  }
}

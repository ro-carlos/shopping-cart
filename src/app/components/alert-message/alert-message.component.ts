import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss'],
})
export class AlertMessageComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cancel() {
    if (this.data.cancelAction) {
      this.data.cancelAction();
    } else {
      this.dialogRef.close();
    }
  }

  accept() {
    if (this.data.acceptAction) {
      this.data.acceptAction();
    } else {
      this.dialogRef.close();
    }
  }

  get icono(): string {
    if (this.data.error) {
      switch (this.data.error.severity) {
        case 0:
          return 'assets/icons/info.png';
        case 1:
          return 'assets/icons/warning.png';
        case 2:
          return 'assets/icons/error.png';
        case 3:
          return 'assets/icons/confirmation.png';
        case 4:
          return 'assets/icons/success.png';
      }
    }
  }

  get color(): string {
    if (this.data.error) {
      switch (this.data.error.severity) {
        case 0:
          return '#1ed5fb';
        case 1:
          return '#fd6602';
        case 2:
          return '#ff3648';
        case 3:
          return '#b15fea';
        case 4:
          return '#09f414';
      }
    }
  }
}

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmBoxComponent, ConfirmBoxData } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-delete-button',
  templateUrl: 'delete-button.component.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class DeleteButtonComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() action: () => void = () => console.error('Action missing');
  @Input() actionLabel: string = 'Delete';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ConfirmBoxComponent, {
      data: {
        title: this.title,
        message: this.message,
        actionLabel: this.actionLabel,
        action: this.action,
        warn: true,
      } as ConfirmBoxData
    });
  }
}

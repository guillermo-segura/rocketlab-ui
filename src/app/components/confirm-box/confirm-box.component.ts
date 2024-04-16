import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface ConfirmBoxData {
  title: string;
  message: string;
  action: () => void;
  actionLabel: string;
  warn?: boolean;
}

@Component({
  selector: 'app-confirm-box',
  templateUrl: 'confirm-box.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, NgIf],
})
export class ConfirmBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmBoxData) {}
}

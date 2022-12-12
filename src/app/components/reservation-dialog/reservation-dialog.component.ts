import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss'],
})
export class ReservationDialogComponent implements OnDestroy {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter();

  value: Date | undefined;
  valuePerson: number = 1;

  onClose() {
    this.displayChange.emit(false);
  }

  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
}

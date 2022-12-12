import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  display = false;

  topFunction(): void {
    window.scrollTo(0, 0);
  }

  showDialog() {
    this.display = true;
  }

  onDialogClose(event: boolean) {
    this.display = event;
  }
}

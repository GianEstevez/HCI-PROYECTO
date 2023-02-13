import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    // Forzar el modo claro en la plataforma Android
    if (this.platform.is('android')) {
      document.body.classList.toggle('light-mode', true);
    }
  }
}
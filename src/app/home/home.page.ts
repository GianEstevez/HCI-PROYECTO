import { ModalController } from '@ionic/angular';
import { SimpleModalPage } from '../simple-modal/simple-modal.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private route: Router) {}

  ngOnInit(): void {
      //this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SimpleModalPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

  abrirbs() {
    this.presentModal();
  }

  filter() {
    this.route.navigate(['/filter']);
  }
}

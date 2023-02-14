import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaltrayecto',
  templateUrl: './modaltrayecto.page.html',
  styleUrls: ['./modaltrayecto.page.scss'],
})
export class ModaltrayectoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  cerrarModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}

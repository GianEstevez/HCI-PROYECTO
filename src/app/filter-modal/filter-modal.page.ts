import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../app.module';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {

  data2: any;

  constructor(private backgroundService: BackgroundService) {
    this.data2 = this.backgroundService.getData();
   }

  ngOnInit() {
  }

  public bgImage = './assets/bg.jpeg';

  cambiarFondoFilterParadas(){
    console.log('a');
    this.bgImage = './assets/fondo2.jpeg';
  }

  cambiarFondoSinParadas(){
    this.backgroundService.setData("'./assets/fondo2.jpeg'");
    this.data2 = this.backgroundService.getData();
    console.log(this.data2);
  }

  cambiarFondoOriginal(){
    
  }

}

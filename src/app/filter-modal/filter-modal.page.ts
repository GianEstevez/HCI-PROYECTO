import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../app.module';
import { EventEmitterService } from '../app.module';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {

  data: any;
  toggledata: any;

  public bgImage = this.backgroundService.getData();

  constructor(private backgroundService: BackgroundService,
    private eventEmitterService: EventEmitterService) {
    this.data = this.backgroundService.getData();

    //Para toggle paradas
    const savedValue = localStorage.getItem('toggleValue');
    if (savedValue !== null) {
      this.toggleValue = JSON.parse(savedValue);
    }
    //Para toggle recargas
    const savedValue2 = localStorage.getItem('toggleValue2');
    if (savedValue2 !== null) {
      this.toggleValue2 = JSON.parse(savedValue2);
    }
   }

  ngOnInit() {
  }

  updateData() {
    this.eventEmitterService.emitChange("'./assets/fondo2.jpeg'");
  }

  toggleValue: boolean = false;
  toggleValue2: boolean = false;
  controllerParadas = 0;
  controllerRecargas = 0;

  changeValueParadas() {

    // F1
    if (this.toggleValue && !this.toggleValue2 && this.controllerRecargas == 0) {
      // Do something when toggle is on
      this.eventEmitterService.emitChange("'./assets/bg-paradas.jpeg'");
      console.log('F1');
      this.controllerParadas = 1;
    }

    // F1 - 1
    if (this.toggleValue && !this.toggleValue2 && this.controllerRecargas == 1) {
      // Do something when toggle is on
      this.eventEmitterService.emitChange("'./assets/bg-paradas.jpeg'");
      console.log('F1');
      this.controllerParadas = 1;
    }
    
    // F2
    if (!this.toggleValue && !this.toggleValue2 && this.controllerParadas == 0) {
      // Do something when toggle is off
      console.log('F2');
      this.controllerParadas = 1;
      this.eventEmitterService.emitChange("'./assets/bg.jpeg'");
    }

    // F3
    if (!this.toggleValue && this.toggleValue2 && this.controllerParadas == 1) {
      console.log('F3');
      this.eventEmitterService.emitChange("'./assets/bg-recarga.jpeg'");
      this.controllerRecargas = 1;
    }
    
    
    // F4
    if (this.toggleValue && this.toggleValue2){
      this.eventEmitterService.emitChange("'./assets/bg-parada-recarga.jpeg'");
      this.controllerParadas = 1;
      this.controllerRecargas = 1;
       console.log('F4');
    }

    // F4 - 1
    if (this.toggleValue && !this.toggleValue2 && this.controllerParadas == 1) {
      // Do something when toggle is off
      console.log('F4-1');
      this.controllerParadas = 1;
      this.eventEmitterService.emitChange("'./assets/bg-paradas.jpeg'");
    }

    // F4 - 1
    if (!this.toggleValue && !this.toggleValue2) {
      // Do something when toggle is off
      console.log('F4-1');
      this.eventEmitterService.emitChange("'./assets/bg.jpeg'");
    }

    localStorage.setItem('toggleValue', JSON.stringify(this.toggleValue));

    
  }

  changeValueRecargas() {
    // F5 
    if (this.toggleValue2 && !this.toggleValue && this.controllerParadas == 0) {
      // Do something when toggle is on
      this.eventEmitterService.emitChange("'./assets/bg-recarga.jpeg'");
      console.log('F5');
      this.controllerRecargas = 1;
    } 
     // F6
     if (!this.toggleValue2 && !this.toggleValue && this.controllerParadas == 0) {
       // Do something when toggle is off
       console.log('F6');
       this.eventEmitterService.emitChange("'./assets/bg.jpeg'");
       
     }
    
    // F7
    if (!this.toggleValue2 && !this.toggleValue && this.controllerParadas == 1) {
      // Do something when toggle is off
      console.log('F7');
      this.controllerRecargas = 1;
      this.eventEmitterService.emitChange("'./assets/bg.jpeg'");
    }
    //F8
    if (this.toggleValue && this.toggleValue2){
      this.eventEmitterService.emitChange("'./assets/bg-parada-recarga.jpeg'");
      console.log('F8');
      this.controllerParadas = 1;
      this.controllerRecargas = 1;
    }
    // F9
    if (this.toggleValue && !this.toggleValue2 && this.controllerRecargas == 1){
      this.eventEmitterService.emitChange("'./assets/bg-paradas.jpeg'");
      console.log('F9');
      this.controllerRecargas = 1;
    }

    // F10
    if (this.toggleValue2 && !this.toggleValue && this.controllerParadas == 1) {
      // Do something when toggle is off
      console.log('F10');
      this.controllerRecargas = 1;
      this.eventEmitterService.emitChange("'./assets/bg-recarga.jpeg'");
    }

    // F12
    if (this.toggleValue && !this.toggleValue2 && this.controllerRecargas == 1) {
      // Do something when toggle is on
      this.eventEmitterService.emitChange("'./assets/bg-paradas.jpeg'");
      console.log('F12');
      this.controllerParadas = 1;
  
    } 

    // F12 - 1
    if (this.toggleValue && !this.toggleValue2 && this.controllerParadas == 1) {
      // Do something when toggle is on
      this.eventEmitterService.emitChange("'./assets/bg-paradas.jpeg'");
      console.log('F12 - 1');
      this.controllerParadas = 1;
  
    }
    
    localStorage.setItem('toggleValue2', JSON.stringify(this.toggleValue2));

    
  }



  contador = 2;

  cambiarFondoSinParadas(){
    if (this.contador % 2 == 0){
      this.backgroundService.setData("'./assets/fondo2.jpeg'");
      console.log(this.backgroundService.getData());
      this.contador = this.contador + 1;
    }else {
      this.backgroundService.setData("'./assets/bg.jpeg'");
      console.log(this.backgroundService.getData());
      this.contador = this.contador + 1;
    }
  }

  cambiarFondoOriginal(){
    
  }

}

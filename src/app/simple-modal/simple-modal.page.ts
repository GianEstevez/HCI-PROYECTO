import { Component, OnInit } from '@angular/core';
import { EventEmitterService2 } from '../app.module';
import { Router } from '@angular/router';



@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.page.html',
  styleUrls: ['./simple-modal.page.scss'],
})
export class SimpleModalPage implements OnInit {

  valorDir = '';
  valorOrig = '';

  constructor(private eventEmitterService: EventEmitterService2,
    private route: Router) {
    
   }

  ngOnInit() {
   
    const auxiliar = this.eventEmitterService.getData();
    this.valorDir = auxiliar?.dir;
    this.valorOrig = auxiliar?.dir2;

    console.log(auxiliar);
  }

  irtray(){
    this.route.navigate(['/trayecto']);
    
  }

}

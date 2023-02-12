import { ModalController } from '@ionic/angular';
import { SimpleModalPage } from '../simple-modal/simple-modal.page';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FilterModalPage } from '../filter-modal/filter-modal.page';
import { DataService, BackgroundService } from '../app.module';
import { EventEmitterService } from '../app.module';
import { IonMenu } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  @ViewChild('menu', { static: true }) menu: any;
  
  //backgroundImages = [
  //  './assets/bg.jpeg',
  //];

  
  
  public aColor: string = "#ccc";

  // cambiarFondoFilterParadas(){
  //   this.bgImage = './assets/fondo2.jpeg';
  // }

  contador = 2;

  
  cambiarFondoFilterParadas(){

    if (this.contador % 2 == 0){
      this.backgroundService.setData("'./assets/fondo2.jpeg'");
      this.bgImage = this.backgroundService.getData();
      console.log(this.bgImage);
      this.contador = this.contador + 1;
    }else {
      this.backgroundService.setData("'./assets/bg.jpeg'");
      this.bgImage = this.backgroundService.getData();
      console.log(this.bgImage);
      this.contador = this.contador + 1;
    }

    
  }

  //public bgImage = this.backgroundService.getData();
  public bgImage = "'./assets/bg.jpeg'";
  data = "'./assets/bg.jpeg'";

  constructor(private modalCtrl: ModalController,
    private route: Router,
    private dataService: DataService,
    private backgroundService: BackgroundService,
    private eventEmitterService: EventEmitterService,
    private menuController: MenuController,
    public toastController: ToastController) {
      
      //this.bgImage = this.backgroundService.getData();
    

      this.eventEmitterService.changeEmitted$.subscribe(
        change => {
          this.bgImage = change;
        }
      );

    }

  
    ngAfterViewInit() {
      const menuEl = this.menu.el;
      document.addEventListener('click', (event) => {
        if (!menuEl.contains(event.target)) {
          this.menuController.close();
        }
      });
    }
    

  ngOnInit(): void {
      //this.presentModal();
      // this.bgImage = './assets/bg.jpeg'; 
      
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SimpleModalPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

  async presentModalFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }
  
  fabToggled = false;

  toggleFab() {
    this.fabToggled = !this.fabToggled;
  }

  async accion1() {
    const toast = await this.toastController.create({
      message: 'Acción 1 ejecutada',
      duration: 2000,
    });
    toast.present();
  }

  async accion2() {
    const toast = await this.toastController.create({
      message: 'Acción 2 ejecutada',
      duration: 2000,
    });
    toast.present();
  }

  async accion3() {
    const toast = await this.toastController.create({
      message: 'Acción 3 ejecutada',
      duration: 2000,
    });
    toast.present();
  }


  abrirbs() {
    this.presentModal();
  }

  abrirfilter(){
    this.presentModalFilter();
  }

  filter() {
    this.route.navigate(['/filter']);
  }

  trayecto(){
    this.route.navigate(['/trayecto']);
  }

  viewData() {
    const variableRecuperada = this.dataService.getData();
    console.log(variableRecuperada);
  }
}

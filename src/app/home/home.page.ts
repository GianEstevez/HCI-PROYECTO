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
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';



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

  statusBarHeight: number = 0;

  
  
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
  public bgImage = "'./assets/bg.png'";
  data = "'./assets/bg.png'";

  constructor(private modalCtrl: ModalController,
    private route: Router,
    private dataService: DataService,
    private backgroundService: BackgroundService,
    private eventEmitterService: EventEmitterService,
    private menuController: MenuController,
    public toastController: ToastController,
    private platform: Platform) {
      
      //this.bgImage = this.backgroundService.getData();


      this.eventEmitterService.changeEmitted$.subscribe(
        change => {
          this.bgImage = change;
        }
      );

    }

    showBackdrop = false;

    toggleFab() {
    this.showBackdrop = !this.showBackdrop;
  }

  isFabOpened = false;

  ionFabWillOpen() {
    this.isFabOpened = true;
  }

  
  

  
    ngAfterViewInit() {
      const menuEl = this.menu.el;
      document.addEventListener('click', (event) => {
        if (!menuEl.contains(event.target)) {
          this.menuController.close();
        }
      });
    }
    
  imgLoaded: Record<number, boolean> = {};
  imageSrcs = ['./assets/fondo2.jpeg','./assets/bg-paradas.jpeg','./assets/bg-recarga.jpeg','./assets/bg-parada-recarga.png'];

  ngOnInit(): void {
      //this.presentModal();
      // this.bgImage = './assets/bg.jpeg'; 
      
  }

  preloadImages() {
    for (let i = 0; i < this.imageSrcs.length; i++) {
      const img = new Image();
      img.onload = () => {
        this.imgLoaded[i] = true;
      }
      img.src = this.imageSrcs[i];
    }
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
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5
    });
    await modal.present();
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
  
  toCall(){
    this.route.navigate(['/phonesos']);
  }

  viewData() {
    const variableRecuperada = this.dataService.getData();
    console.log(variableRecuperada);
  }
}

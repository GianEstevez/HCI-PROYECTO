import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModaltrayectoPage } from '../modaltrayecto/modaltrayecto.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { EventEmitterService2 } from '../app.module';
import { EventEmitterService3 } from '../app.module';




@Component({
  selector: 'app-trayecto',
  templateUrl: './trayecto.page.html',
  styleUrls: ['./trayecto.page.scss'],
})
export class TrayectoPage implements OnInit, OnDestroy {

  personas: { nombre: string, apellido: string, saver2: number }[] = [];
  personas2: { dir: any, dir2: any }[] = [];
  nombre: string = '';
  apellido: string = '';
  mostrarMensajeError: boolean = false;
  contper: number = 0;
  saver: number = 0;

  dirorin: string = '';
  dirdest: string = '';
  
  prueba(i: number){
    console.log(i);
    console.log(this.personas[i]);
  }

  agregarPersona() {
    if (!this.nombre || !this.apellido) {
      //alert('No se puede agregar una persona sin nombre y apellido.');
      this.mostrarMensajeError = true;
      return;
    }
    this.personas.push({ nombre: this.nombre, apellido: this.apellido, saver2: this.contper + 1 });
    this.personas2.push({ dir: this.nombre, dir2: this.apellido});
    this.nombre = '';
    this.apellido = '';
    this.mostrarMensajeError = false;
    this.contper = this.contper + 1;
    this.saver = this.contper ;

  }

  ngOnInit() {
    const auxiliar = this.eventEmitterService.getData();
    this.dirorin = auxiliar.dir;
    this.dirdest = auxiliar.dir2;
  }

  ngOnDestroy(): void {
    
  }


  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private route: Router,
    private modalController: ModalController,
    public alertController: AlertController,
    private eventEmitterService: EventEmitterService2,
    private eventEmitterService2: EventEmitterService3) {
    this.myForm = this.fb.group({
      inputs: this.fb.array([])
    });

    this.eventEmitterService.changeEmitted$.subscribe(
      change => {
        this.dirorin = change.dir;
        this.dirdest = change.dir2;
        console.log(this.dirorin);
      }
    );
    




  }

  async abrirDialogo(i: number) {
    
    const alert = await this.alertController.create({
      header: '¿Seleccionar este trayecto?',
      message: 'Este será su nuevo recorrido en la pantalla principal',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          
        }
      },
      {
        text: 'Aceptar',
        handler: data => {
          this.eventEmitterService.emitChange(this.personas2[i]);
        }
      },]
    });
    await alert.present();
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModaltrayectoPage
    });
    return await modal.present();
  }

  get inputs() {
    return this.myForm.get('inputs') as FormArray;
  }

  addInput() {
    this.inputs.push(new FormControl(''));
  }

  removeInput(index: number) {
    this.inputs.removeAt(index);
  }

  home(){
    this.route.navigate(['/']);
  }

}

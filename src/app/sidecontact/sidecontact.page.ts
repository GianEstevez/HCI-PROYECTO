import { Component, OnInit } from '@angular/core';
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
  selector: 'app-sidecontact',
  templateUrl: './sidecontact.page.html',
  styleUrls: ['./sidecontact.page.scss'],
})
export class SidecontactPage implements OnInit {

  constructor(private fb: FormBuilder,
    private route: Router,
    private modalController: ModalController,
    public alertController: AlertController,
    private eventEmitterService: EventEmitterService2,
    private eventEmitterService2: EventEmitterService3) {
  
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


  home(){
    this.route.navigate(['/']);
  }

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

 
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModaltrayectoPage } from '../modaltrayecto/modaltrayecto.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-trayecto',
  templateUrl: './trayecto.page.html',
  styleUrls: ['./trayecto.page.scss'],
})
export class TrayectoPage implements OnInit {

  personas: { nombre: string, apellido: string }[] = [];
  nombre: string = '';
  apellido: string = '';
  mostrarMensajeError: boolean = false;
  contper: number = 0;
  saver: number = 0;
  

  agregarPersona() {
    if (!this.nombre || !this.apellido) {
      //alert('No se puede agregar una persona sin nombre y apellido.');
      this.mostrarMensajeError = true;
      return;
    }
    this.personas.push({ nombre: this.nombre, apellido: this.apellido });
    this.nombre = '';
    this.apellido = '';
    this.mostrarMensajeError = false;
    this.contper = this.contper + 1;
    this.saver = this.contper ;

  }

  ngOnInit() {
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private route: Router,
    private modalController: ModalController,
    public alertController: AlertController) {
    this.myForm = this.fb.group({
      inputs: this.fb.array([])
    });
  }

  async abrirDialogo() {
    const alert = await this.alertController.create({
      header: '¿Seleccionar este trayecto?',
      message: 'Este será su nuevo recorrido en la pantalla principal.',
      buttons: ['Cancelar','Aceptar']
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

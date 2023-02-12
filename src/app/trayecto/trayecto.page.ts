import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-trayecto',
  templateUrl: './trayecto.page.html',
  styleUrls: ['./trayecto.page.scss'],
})
export class TrayectoPage implements OnInit {

  personas: { nombre: string, edad: number }[] = [];
  nombre: string = '';
  edad: number = 0;

  agregarPersona() {
    this.personas.push({ nombre: this.nombre, edad: this.edad });
    this.nombre = '';
    this.edad = 0;
  }

  ngOnInit() {
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private route: Router,) {
    this.myForm = this.fb.group({
      inputs: this.fb.array([])
    });
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

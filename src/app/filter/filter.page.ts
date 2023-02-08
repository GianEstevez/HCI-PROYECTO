import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, BackgroundService } from '../app.module';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  data: any;
  data2: any;

  constructor(private route: Router, private dataService: DataService,
    private backgroundService: BackgroundService) {
    this.data = this.dataService.getData();
    this.data2 = this.backgroundService.getData();
   }

  ngOnInit() {
  }
  volverInicio(){
    this.route.navigate(['/']);
  }

  changeData() {
    this.dataService.setData('definido ahora como C');
    this.data = this.dataService.getData();
    console.log(this.data);
    console.log('DESDE FILTER');
  }

  viewData() {
    const variableRecuperada = this.dataService.getData();
    console.log(variableRecuperada);
  }

  viewDataFondo() {
    const variableRecuperada = this.backgroundService.getData();
    console.log(variableRecuperada);
  }

  changePRUEBA(){
    this.backgroundService.setData("'./assets/fondo2.jpeg'");
    this.data2 = this.backgroundService.getData();
    console.log(this.data2);
    
  }

  

}

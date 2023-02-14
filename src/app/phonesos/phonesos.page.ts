import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonesos',
  templateUrl: './phonesos.page.html',
  styleUrls: ['./phonesos.page.scss'],
})
export class PhonesosPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  home(){
    this.route.navigate(['/']);
  }


}

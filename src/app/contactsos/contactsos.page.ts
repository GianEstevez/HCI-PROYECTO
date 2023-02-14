import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactsos',
  templateUrl: './contactsos.page.html',
  styleUrls: ['./contactsos.page.scss'],
})
export class ContactsosPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  home(){
    this.route.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { ChildService } from '../../services/child.service';
import { Child } from '../../models/Child';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  child: Child = {
    nombre: '',
    ident: null,
    born: '',
    nacion: '',
    edad: null,
    escol: null,
    dir: '',
    rh: '',
    estado: false,
    service: '',
    tutor: '',
    cel: null,
    obs: ''
  };

  constructor(public _childService: ChildService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(forma: NgForm) {
    this._childService.addChild(this.child);
    this.router.navigate(['/childs']);
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/child', 'nuevo']);
    forma.reset();
  }

  goBack() {
    console.log('go back 1');
    this.router.navigate(['/childs']);
  }

}

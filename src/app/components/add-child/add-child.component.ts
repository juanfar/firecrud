import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Child } from '../../models/Child';
import { ChService } from '../../services/ch.service';


@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {

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

  @ViewChild('clientForm') form: any;

  constructor(private flashMessage: FlashMessagesService,
              private _chService: ChService,
              private router: Router,
              ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Child, valid: boolean}) {
    if (!valid) {
      // show error
      this.flashMessage.show('Por favor llenar el formulario correctamente', {
        cssClass: 'alert-danger animated fadeIn', timeout: 4000
      });
    } else {
      // add new Client
      this._chService.newChild(value);
      // show message
      this.flashMessage.show('Nuevo Estudiante agregado', {
        cssClass: 'alert-success animated fadeIn', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/']);
    }
  }

}

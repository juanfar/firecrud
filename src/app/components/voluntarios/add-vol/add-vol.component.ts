import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Vol } from '../../../models/Vol';
import { VolService } from '../../../services/vol.service';

@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {

  vol: Vol = {
    nombre: '',
    ident: null,
    nacion: '',
    edad: null,
    rh: '',
    dir: '',
    cel: null,
    area: '',
    jornada: '',
    estado: false,
    obs: ''
  };

  @ViewChild('volForm') form: any;

  constructor(private flashMessage: FlashMessagesService,
              private _volService: VolService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Vol, valid: boolean}) {
    if (!valid) {
      // show error
      this.flashMessage.show('Por favor llenar el formulario correctamente', {
        cssClass: 'alert-danger animated fadeIn', timeout: 4000
      });
    } else {
      // add new Client
      this._volService.newVol(value);
      // show message
      this.flashMessage.show('Nuevo Voluntario agregado', {
        cssClass: 'alert-success animated fadeIn', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/vols']);
    }
  }

}

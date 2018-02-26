import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { VolService } from '../../../services/vol.service';

import { Vol } from '../../../models/Vol';

@Component({
  selector: 'app-edit-vol',
  templateUrl: './edit-vol.component.html',
  styleUrls: ['./edit-vol.component.css']
})
export class EditVolComponent implements OnInit {
  id: string;

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

  constructor(private _volService: VolService,
              private router: Router,
              private route: ActivatedRoute,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
     // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get client
    this._volService.getVol(this.id).subscribe(vol => this.vol = vol);
  }

  onSubmit({value, valid}: {value: Vol, valid: boolean}) {
    if (!valid) {
      this.flashMessages.show('Por favor llene el formulario de manera correcta', {
        cssClass: 'alert-danger animated fadeIn', timeout: 4000
      });
    } else {
      // Add id to client
      value.id = this.id;
      // Update the client
      this._volService.updateVol(value);
      this.flashMessages.show('Voluntario Actualizado', {
        cssClass: 'alert-success animated fadeIn', timeout: 4000
      });
      this.router.navigate(['/vol/' + this.id]);
    }
  }

}

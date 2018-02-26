import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ChService } from '../../../services/ch.service';

import { Child } from '../../../models/Child';


@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.css']
})
export class EditChildComponent implements OnInit {
  id: string;

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

  constructor(private _chService: ChService,
              private router: Router,
              private route: ActivatedRoute,
              private flashMessages: FlashMessagesService,
              ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get client
    this._chService.getChild(this.id).subscribe(child => this.child = child);
  }

  onSubmit({value, valid}: {value: Child, valid: boolean}) {
    if (!valid) {
      this.flashMessages.show('Por favor llene el formulario de manera correcta', {
        cssClass: 'alert-danger animated fadeIn', timeout: 4000
      });
    } else {
      // Add id to client
      value.id = this.id;
      // Update the client
      this._chService.updateChild(value);
      this.flashMessages.show('Estudiante Actualizado', {
        cssClass: 'alert-success animated fadeIn', timeout: 4000
      });
      this.router.navigate(['/child/' + this.id]);
    }
  }

}

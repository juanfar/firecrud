import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VolService } from '../../../services/vol.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Vol } from '../../../models/Vol';

@Component({
  selector: 'app-vol-details',
  templateUrl: './vol-details.component.html',
  styleUrls: ['./vol-details.component.css']
})
export class VolDetailsComponent implements OnInit {
  id: string;
  vol: Vol;
  color_icon: string;

  constructor(private _volService: VolService,
              private router: Router,
              private route: ActivatedRoute,
              private flashMessages: FlashMessagesService) {
    this.color_icon = 'green';
  }

  ngOnInit() {
     // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get child
    this._volService.getVol(this.id).subscribe(vol => {
      this.vol = vol;
    });
  }

  onDeleteClick() {
      this._volService.deleteVol(this.vol);
      this.flashMessages.show('Voluntario eliminado', {
        cssClass: 'alert-success animated fadeIn', timeout: 4000
      });
      this.router.navigate(['/vols']);
  }

}

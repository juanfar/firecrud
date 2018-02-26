import { Component, OnInit } from '@angular/core';
import { VolService } from '../../../services/vol.service';

import { Vol } from '../../../models/Vol';

@Component({
  selector: 'app-vol-list',
  templateUrl: './vol-list.component.html',
  styleUrls: ['./vol-list.component.css']
})
export class VolListComponent implements OnInit {
  vols: Vol[];
  items: any;

  constructor(private _volService: VolService) { }

  ngOnInit() {
    this._volService.getVols().subscribe(vols => {
      this.vols = vols;
    });
  }

}

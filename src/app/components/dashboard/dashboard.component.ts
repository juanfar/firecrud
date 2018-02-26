import { VolService } from '../../services/vol.service';
import { Component, OnInit } from '@angular/core';
import { ChService } from '../../services/ch.service';
import { Child } from '../../models/Child';
import { Vol } from '../../models/Vol';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  childs: Child[];
  vols: Vol[];

  constructor(private _chService: ChService,
              private _volService: VolService) { }

  ngOnInit() {
    this._chService.getChilds().subscribe(childs => {
      this.childs = childs;
      console.log(this.childs);
    });
    this._volService.getVols().subscribe(vols => {
      this.vols = vols;
      console.log(this.vols);
    });
  }

}

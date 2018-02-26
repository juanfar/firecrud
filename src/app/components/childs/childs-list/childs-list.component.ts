import { Component, OnInit } from '@angular/core';
import { ChService } from '../../../services/ch.service';

import { Child } from '../../../models/Child';

@Component({
  selector: 'app-childs-list',
  templateUrl: './childs-list.component.html',
  styleUrls: ['./childs-list.component.css']
})
export class ChildsListComponent implements OnInit {
  childs: Child[];
  items: any;

  constructor(private _chService: ChService) { }

  ngOnInit() {
    this._chService.getChilds().subscribe(childs => {
      this.childs = childs;
    });
  }

}

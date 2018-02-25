import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../services/child.service';
import { ChService } from '../../services/ch.service';
import { ActivatedRoute } from '@angular/router';

import { Child } from '../../models/Child';


@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css']
})
export class ChildsComponent implements OnInit {
  childs: Child[];
  editState = false;
  childToEdit: Child;

  constructor(public _childService: ChildService,
              private _chService: ChService) {}

  ngOnInit() {
    console.log('ngOnit run');

    this._childService.getChilds().subscribe(data => {
      console.log(data);
      this.childs = data;
    });
    console.log('entrando2');
  }

  deleteChild(event, child) {
    const response = confirm('¿Esta seguro de eliminar este estudiante?');
    if (response ) {
      this._childService.deleteChild(child);
    }
    return;
  }

  editTask(event, child) {
    this.editState = !this.editState;
    this.childToEdit = child;
  }

  updateTask(child) {
    this._childService.updateChild(child);
    this.childToEdit = null;
    this.editState = false;
  }

}

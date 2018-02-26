import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ChService } from '../../../services/ch.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Child } from '../../../models/Child';


@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {
  id: string;
  child: Child;
  color_icon: string;

  constructor(private _chService: ChService,
              private router: Router,
              private route: ActivatedRoute,
              private flashMessages: FlashMessagesService) {
    this.color_icon = 'green';
  }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get child
    this._chService.getChild(this.id).subscribe(child => {
      this.child = child;
    });
  }

  onDeleteClick() {
      this._chService.deleteChild(this.child);
      this.flashMessages.show('Estudiante eliminado', {
        cssClass: 'alert-success animated fadeIn', timeout: 4000
      });
      this.router.navigate(['/childs']);
  }

}

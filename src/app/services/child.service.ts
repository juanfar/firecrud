import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Child } from '../models/child';

@Injectable()
export class ChildService {
  childsCollection: AngularFirestoreCollection<Child>;
  childs: Observable<Child[]>;
  childDoc: AngularFirestoreDocument<Child>;

  constructor(public afs: AngularFirestore) {
    this.childsCollection = this.afs.collection('childs');
  }

  getChilds(): Observable<Child[]> {
    this.childs = this.childsCollection.snapshotChanges()
    .map( changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Child;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.childs;
  }

  addChild(child: Child) {
    this.childsCollection.add(child);
  }

  deleteChild(child: Child) {
    this.childDoc = this.afs.doc(`childs/${child.id}`);
    this.childDoc.delete();
  }

  updateChild(child: Child) {
    this.childDoc = this.afs.doc(`childs/${child.id}`);
    this.childDoc.update(child);
  }
}

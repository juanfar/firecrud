import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Child } from '../models/child';


@Injectable()
export class ChService {
  childsCollection: AngularFirestoreCollection<Child>;
  childDoc: AngularFirestoreDocument<Child>;
  childs: Observable<Child[]>;
  child: Observable<Child>;

  constructor(private afs: AngularFirestore) {
    this.childsCollection = this.afs.collection('childs',
    ref => ref.orderBy('nombre', 'asc'));
  }

  getChilds(): Observable<Child[]> {
    // Get clients with id
    this.childs = this.childsCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Child;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.childs;
  }

  newChild(child: Child) {
    this.childsCollection.add(child);
  }

  getChild(id: string): Observable<Child> {
    this.childDoc = this.afs.doc<Child>(`childs/${id}`);
    this.child = this.childDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Child;
        data.id = action.payload.id;
        return data;
      }
    });
    return this.child;
  }

  updateChild(child: Child) {
    this.childDoc = this.afs.doc(`childs/${child.id}`);
    this.childDoc.update(child);
  }

  deleteChild(child: Child) {
    this.childDoc = this.afs.doc(`childs/${child.id}`);
    this.childDoc.delete();
  }

}

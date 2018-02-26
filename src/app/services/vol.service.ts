import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Vol } from '../models/Vol';

@Injectable()
export class VolService {
  volsCollection: AngularFirestoreCollection<Vol>;
  volDoc: AngularFirestoreDocument<Vol>;
  vols: Observable<Vol[]>;
  vol: Observable<Vol>;

  constructor(private afs: AngularFirestore) {
    this.volsCollection = this.afs.collection('vols',
    ref => ref.orderBy('nombre', 'asc'));
  }

  getVols(): Observable<Vol[]> {
    // Get clients with id
    this.vols = this.volsCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Vol;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.vols;
  }

  newVol(vol: Vol) {
    this.volsCollection.add(vol);
  }

  getVol(id: string): Observable<Vol> {
    this.volDoc = this.afs.doc<Vol>(`vols/${id}`);
    this.vol = this.volDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Vol;
        data.id = action.payload.id;
        return data;
      }
    });
    return this.vol;
  }

  updateVol(vol: Vol) {
    this.volDoc = this.afs.doc(`vols/${vol.id}`);
    this.volDoc.update(vol);
  }

  deleteVol(vol: Vol) {
    this.volDoc = this.afs.doc(`vols/${vol.id}`);
    this.volDoc.delete();
  }

}

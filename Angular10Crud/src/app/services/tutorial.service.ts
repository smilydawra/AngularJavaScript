import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Tutorial from '../models/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private dbPath = '/tutorials';

  tutorialsRef: AngularFireList<Tutorial> = null;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
   }

   getAll(): AngularFireList<Tutorial> {
     return this.tutorialsRef;
   }

   create(tutorial: Tutorial): any {
     return this.tutorialsRef.push(tutorial);
   }

   update(key: string, value: any): Promise<void> {
     return this.tutorialsRef.update(key, value)
   }

   delete(key: string): Promise<void> {
     return this.tutorialsRef.remove(key);
   }

   deleteAll(): Promise<void> {
     return this.tutorialsRef.remove();
   }
}

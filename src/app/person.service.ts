import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Person } from './person.model';
import { error } from 'console';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private firestore: AngularFirestore) { }

  getPersonDoc(id: string) {
    return this.firestore.collection("person-collection")
      .doc(id).valueChanges()
  }

  getPersonList() {
    return this.firestore.collection("person-collection")
      .snapshotChanges();
  }

  createPerson(person: Person) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("person-collection")
        .add(person)
        .then(respone => { console.log(respone) }, error => reject(error));
    });
  }

  deletePerson(person: Person) {
    return this.firestore.collection("person-collection")
      .doc(person.id).delete();
  }

  updatePerson(person: Person, id: string) {
    return this.firestore.collection("person-collection")
      .doc(id).update({
        name: person.name,
        surname: person.surname,
      });
  }
}

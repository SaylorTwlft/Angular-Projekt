import { Component } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-person',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.css'
})
export class ListPersonComponent {
  Person?: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPersonList().subscribe(res => {
      this.Person = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Person;
      })
    })
  }

  removePerson(Person: Person) {
    if (confirm("Are you sure to delete: " + Person.name)) {
      this.personService.deletePerson(Person);
    }
  }
}

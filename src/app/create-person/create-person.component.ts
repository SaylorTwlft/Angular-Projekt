import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-person.component.html',
  styleUrl: './create-person.component.css'
})
export class CreatePersonComponent {

  public personForm: FormGroup;

  constructor(
    public personService: PersonService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.personForm = this.formBuilder.group({
      name: [''],
      surname: [''],
    })
  }

  onSubmit() {
    this.personService.createPerson(this.personForm.value);
    this.router.navigate(['list-person']);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.css'
})
export class EditPersonComponent {
  public editForm: FormGroup;
  personRef: any;

  constructor(
    public personService: PersonService,
    public formBuilder: FormBuilder,
    public act: ActivatedRoute,
    public router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      surname: [''],
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.personService.getPersonDoc(id!).subscribe(res => {
      this.personRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.personRef.name],
        surname: [this.personRef.surname],
      })
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');

    this.personService.updatePerson(this.editForm.value, id!);
    this.router.navigate(["list-person"]);
  }
}

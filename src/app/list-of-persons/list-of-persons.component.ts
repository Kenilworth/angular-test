import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-list-of-persons',
  templateUrl: './list-of-persons.component.html',
  styleUrls: ['./list-of-persons.component.css']
})
export class ListOfPersonsComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons);
  }

  checkOfAdult(age): boolean {
    if (age >= 18) {
      return true;
    }
    return false;
  }

  checkOfUnderage(age): boolean {
    if (age !== null && age < 18) {
      return true;
    }
    return false;
  }

  removePerson(id): void {
    const personIndex = this.persons.findIndex((person) => id === person.id);
    this.persons.splice(personIndex, 1);
  }
}

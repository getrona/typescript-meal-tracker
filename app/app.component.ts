import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Meal Tracker</h1>
    <h3>{{currentFocus}}{{month}}/{{day}}/{{year}}</h3>
    <ul>
    <li *ngFor="let currentMeal of meals">Name: {{currentMeal.name}} <br> Details: {{currentMeal.details}} <br> Calories: {{currentMeal.calories}} <br> <button (click)="editMeal()">Edit</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'The meals consumed on: '
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  meals: Meal[] = [
    new Meal('Pop.tarts', 'it was very sugary', 300),
    new Meal('chips', 'it was good', 390)
];

editMeal() {

}
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) {}
}

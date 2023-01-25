import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-form';
  defaultCountry = 'india';
  firstname!: string;
  lastname!: string;
  onSubmit(form: NgForm) {

  }
}

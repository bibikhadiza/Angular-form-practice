import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = [ 'english', 'spanish', 'french'];
  model = new Employee('Darla', 'smith', true, "W2", "default");
  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPoster){}

  validatePrimaryLanguage(event){
    console.log("lang:", this.model.primaryLanguage)
    if (event === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }

  submitForm(Form: NgForm) {
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if( this.hasPrimaryLanguageError )
      return;

    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
      )
  }

}

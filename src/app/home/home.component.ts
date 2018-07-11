import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = [ 'english', 'spanish', 'french'];
  model = new Employee('Darla', 'smith', true, "W2", "default");
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(event){
    console.log("lang:", this.model.primaryLanguage)
    if (event === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
}

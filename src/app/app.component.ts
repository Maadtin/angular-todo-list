import {Component} from '@angular/core';
import {Todo} from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  todos: Todo[] = [];

  onFormSubmit(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }


}

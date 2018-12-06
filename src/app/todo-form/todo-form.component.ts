import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../models/Todo';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter<Todo>();

  todoData: [];

  constructor (private fb: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit () {
    console.log('submit');
  }

}

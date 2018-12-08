import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../models/Todo';
import {Form, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() formSubmit: EventEmitter<Todo> = new EventEmitter<Todo>();

  public todoData: FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit() {
    this.todoData = this.fb.group({
      nombre: this.fb.control(''),
      done: this.fb.control(false)
    });
  }

  onSubmit () {
    this.formSubmit.emit(this.todoData.value);
    this.todoData.reset();
  }

}

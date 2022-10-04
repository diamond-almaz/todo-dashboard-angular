import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  todoForm!: FormGroup;

  @Output() addTask: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.todoForm = fb.group({
      item: ['', Validators.required]
    })
   }

   onAdd() {
    this.addTask.emit(this.todoForm.value.item)
    this.todoForm.reset();

   }
}

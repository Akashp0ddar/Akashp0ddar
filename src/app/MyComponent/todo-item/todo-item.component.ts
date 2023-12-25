import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo();
  @Input() i: number = 0;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('button is clicked');
  }

  onCheckBoxClick(todo:Todo){
      this.todoCheckBox.emit(todo)
  }
}

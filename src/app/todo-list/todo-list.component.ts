import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { TodoList } from './todolist';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos:TodoList[] =[];
  newTitle: string = '';
  addTodo() {
    if (this.newTitle.trim()) {
      this.todos.push({ title: this.newTitle, progress: false });
      this.newTitle = '';
    }
  }
  constructor(){}
  ngOnInit(): void {
    
  }
}


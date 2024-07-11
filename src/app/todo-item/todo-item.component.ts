import { NgClass } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() title: string = '';
  @Input() progress: boolean=false;
}


// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';       
import { CommonModule } from '@angular/common';    
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  standalone: true,                                 
  imports: [CommonModule, FormsModule],           
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  task: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(t => this.todos = t);
  }

  addTodo(): void {
    if (!this.task.trim()) return;
    this.todoService.addTodo(this.task).subscribe(t => {
      this.todos.push(t);
      this.task = '';
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== id);
    });
  }
}

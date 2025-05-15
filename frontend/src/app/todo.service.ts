// src/app/todo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private baseUrl = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  addTodo(task: string): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, { task });
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
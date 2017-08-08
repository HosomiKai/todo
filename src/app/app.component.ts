import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = '你需要完成什麼呢？';
  colspan = 3;
  todos: any[] = [] ;
  todo: String = '';

  addTodo() {
    if (this.todo) {
      this.todos.push(this.todo);
      this.todo = ''; // 加入之後輸入框清空
    }

  }
}

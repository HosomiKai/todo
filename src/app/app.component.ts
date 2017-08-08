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
      this.todos = [...this.todos]; // 有這段onChange才會被觸發？
      this.todos.push({
        text: this.todo,
        done: false
      });
      this.todo = ''; // 加入之後輸入框清空
    }

  }
}

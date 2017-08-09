import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  tooMore: Boolean = false;
  constructor() { }
  private _todos: any[] = [];
  @Output() clearComplete = new EventEmitter();
  @Input('data')
   set todos(value) {
     this._todos = value;
     this.tooMore = this.todos.length > 5;
   }
   get todos() {
     return this._todos;
   }

  ngOnInit() {
  }

  doClear() {
     this.clearComplete.emit();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipesdirectives';
  todoItem:string='';
  todolist:Array<string>=[];

  addTodo(){
    this.todolist.push(this.todoItem)
    this.todoItem='';
  }
  removeTodo(index: number){
    this.todolist.splice(index ,1)
  }
}
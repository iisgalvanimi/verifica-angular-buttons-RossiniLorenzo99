import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  list: string[] = []
  testo1:string="button1";
  testo2:string="button2";
  testo3:string="button3";
  testo4:string="button4";

  ultimo:string= ""

  constructor() {}

  onClick1() {
    this.list.push(this.testo1)
    this.ultimo = this.testo1
  }

  onClick2() {
    this.list.push(this.testo2) 
    this.ultimo = this.testo2
  }

  onClick3() {
    this.list.push(this.testo3)
    this.ultimo = this.testo3
  }

  onClick4() {
    this.list.push(this.testo4)
    this.ultimo = this.testo4
  }



}

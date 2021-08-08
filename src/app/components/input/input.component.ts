import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
@Input() label: string;
@Input() type = 'text'; //default type text

focused: boolean;
  constructor() { }

onBlur(event: any){
  const value = event.target.value;

  if(!value){
    this.focused = false;
  }
}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-color',
  templateUrl: './buttons-color.component.html',
  styleUrls: ['./buttons-color.css']
})
export class ButtonsColorComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
  }

  text_color:string = '';
  button_disabled:boolean = false;

}

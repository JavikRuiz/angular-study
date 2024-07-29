import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
  }
  numero:number = 1

  operation(event: MouseEvent) {
    const operator = (event.target as HTMLButtonElement).innerText;
    console.log(operator)
    let result = operator == '+' ? this.numero++ : this.numero--
    console.log(result)
    return result
  }
}

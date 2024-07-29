import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styles: [
  ]
})
export class ForComponent implements OnInit{

  personas:Persona[]
  constructor() {
    this.personas = [
      { nombre: 'Rocio', edad: 59 },
      { nombre: 'Meliza', edad: 17 },
      { nombre: 'Javier', edad: 40 },
      { nombre: 'Karen', edad: 23 },
      { nombre: 'Lorena', edad: 39 },
      { nombre: 'Marcela', edad: 36 },
      { nombre: 'Diego', edad: 35 },
      { nombre: 'Camilo', edad: 28 }
    ];
  }

  ngOnInit(): void {
  }

}

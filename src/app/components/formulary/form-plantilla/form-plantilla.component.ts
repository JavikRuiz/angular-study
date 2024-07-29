import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.css']
})
export class FormPlantillaComponent implements OnInit{

  persona:Persona

  constructor() {
    this.persona = {
      nombre: '',
      edad: 0
    }
  }
  ngOnInit(): void {
  }
  procesar() {
    console.log(this.persona)
  }

}

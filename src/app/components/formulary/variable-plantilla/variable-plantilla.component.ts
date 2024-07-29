import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable-plantilla',
  templateUrl: './variable-plantilla.component.html',
  styleUrls: ['./variable-plantilla.component.css']
})
export class VariablePlantillaComponent implements OnInit {
  ngOnInit(): void {
  }
  openAlert:boolean = false
  mostrar_consola(name:string) {
    console.log(name)
    if (name) {
      this.openAlert = true
    }
  }
}

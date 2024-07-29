import { Routes } from "@angular/router";
import { FormularyComponent } from "./formulary.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { VariablePlantillaComponent } from "./variable-plantilla/variable-plantilla.component";
import { FormPlantillaComponent } from "./form-plantilla/form-plantilla.component";

const formularyRoutes:Routes = [
    {
        path: 'formulary', component:FormularyComponent,
        children: [
            {path:'', redirectTo:'variable-plantilla', pathMatch:'full'},
            {path:'variable-plantilla', component:VariablePlantillaComponent},
            {path:'form-plantilla', component:FormPlantillaComponent},
            {path:'reactive', component:ReactiveComponent}
        ]
    }
]

export default formularyRoutes
import { Routes } from "@angular/router";
import { BuclesComponent } from "./bucles.component";
import { ForComponent } from "./for/for.component";
import { SwitchComponent } from "./switch/switch.component";

const buclesRouter:Routes = [
    {
        path: 'bucles', component:BuclesComponent,
        children: [
            {path:'', redirectTo:'for',pathMatch:'full'},
            {path:'for', component:ForComponent},
            {path:'switch', component:SwitchComponent}
        ]
    }
]

export default buclesRouter
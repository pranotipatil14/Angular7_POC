import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstScreenComponent} from './first-screen/first-screen.component';
import {SecondScreenComponent} from './second-screen/second-screen.component';
import {FinalScreenComponent} from './final-screen/final-screen.component';

const routes: Routes = [
  { path: '', component: FirstScreenComponent },
  {path:'second-screen', component: SecondScreenComponent},
  {
    path:'final-screen' , component:FinalScreenComponent
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







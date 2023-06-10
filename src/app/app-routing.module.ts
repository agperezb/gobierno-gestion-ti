import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FormComponent} from "./form/form.component";
import {ResponseComponent} from "./response/response.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'response',
    component: ResponseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

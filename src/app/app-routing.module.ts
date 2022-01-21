import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'products', component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})

export class AppRoutingModule { }

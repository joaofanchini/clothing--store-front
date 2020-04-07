import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  { path: 'register-product', component: ProductComponent },
  { path: 'list-product', component: ListProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

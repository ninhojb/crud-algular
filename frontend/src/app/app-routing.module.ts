import { CarroUpdateComponent } from './components/carro/carro-update/carro-update.component';
import { CarroCrudComponent } from './views/carro-crud/carro-crud.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { CarroDeleteComponent } from './components/carro/carro-delete/carro-delete.component';
import { CarroCreateComponent } from './components/carro/carro-create/carro-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "carros",
    component: CarroCrudComponent
  },
  {
    path: "carros/create",
    component: CarroCreateComponent
  },
  {
    path: "carros/update/:id",
    component: CarroUpdateComponent
  },
  {
    path: "carros/delete/:id",
    component: CarroDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

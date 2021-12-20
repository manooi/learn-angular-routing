import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component'
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component'

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent, resolve: { resolvedData: ProductResolver } },
    {
      path: 'products/:id/edit', component: ProductEditComponent, resolve: { resolvedData: ProductResolver },
      children: [

        { path: '', redirectTo: 'info', pathMatch: 'full' },
        { path: 'info', component: ProductEditInfoComponent },
        { path: 'tags', component: ProductEditTagsComponent }
      ]
    }
  ])],
  exports: [RouterModule]

})
export class ProductRoutingModule { }

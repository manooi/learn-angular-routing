import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product-edit.component';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(
    component: ProductEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (!component.isDirty) {
        resolve(true);
      } else {
        return Swal.fire({
          title: 'Exit?',
          text: 'All your unsaved changes will be lost',
          icon: 'warning',
          confirmButtonText: 'Stay',
          showCancelButton: true,
          cancelButtonText: 'Leave',
        })
          .then((result) => {
            console.log(result);
            if (result.isConfirmed) {
              console.log('stay');
              return new Promise((resolve) => resolve(false));
            } else {
              console.log('leave');
              return new Promise((resolve) => resolve(true));
            }
          })
          .then((isStay: boolean) => {
            if (isStay) {
              resolve(true);
            }
            resolve(false);
          });
      }
    });
  }
}

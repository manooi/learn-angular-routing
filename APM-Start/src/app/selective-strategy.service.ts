import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectiveStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    // decide whether or not to preload a particular module
    if (route.data && route.data['preload']) {
      return load();
    }
    return of(null);
  }
}

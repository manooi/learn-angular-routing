import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules,
  PreloadingStrategy,
} from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        {
          path: 'products',
          // canLoad: [AuthGuard], // load module after successfully logged in, but it blocks any preloading!
          canActivate: [AuthGuard], // to use with preloadall
          loadChildren: () =>
            import('./products/product.module').then((m) => m.ProductModule),
        },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent },
      ],
      { preloadingStrategy: PreloadAllModules }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

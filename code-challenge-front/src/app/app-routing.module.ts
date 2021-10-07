import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchitecturalPatternsComponent } from './architectural-patterns/architectural-patterns.component';
import { CodeReviewComponent } from './code-review/code-review.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { OopComponent } from './oop/oop.component';
import { SolidComponent } from './solid/solid.component';
import { TddComponent } from './tdd/tdd.component';
import { WebApiComponent } from './web-api/web-api.component';

const routes: Routes = [
  { path: 'code-review', component: CodeReviewComponent },
  { path: 'architectural-patterns', component: ArchitecturalPatternsComponent },
  { path: 'design-patterns', component: DesignPatternsComponent },
  { path: 'solid', component: SolidComponent },
  { path: 'web-api', component: WebApiComponent },
  { path: 'tdd', component: TddComponent },
  { path: 'oop', component: OopComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

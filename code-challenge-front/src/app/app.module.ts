import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchitecturalPatternsComponent } from './architectural-patterns/architectural-patterns.component';
import { CodeReviewComponent } from './code-review/code-review.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { MaterialModule } from './material.module';
import { OopComponent } from './oop/oop.component';
import { HeaderComponent } from './shared/header/header.component';
import { SolidComponent } from './solid/solid.component';
import { TddComponent } from './tdd/tdd.component';
import { WebApiComponent } from './web-api/web-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CodeReviewComponent,
    ArchitecturalPatternsComponent,
    DesignPatternsComponent,
    SolidComponent,
    WebApiComponent,
    TddComponent,
    OopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

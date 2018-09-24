import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { ComplexComponent } from './complex/complex.component';

const appRoutes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'complex', component: ComplexComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ComplexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

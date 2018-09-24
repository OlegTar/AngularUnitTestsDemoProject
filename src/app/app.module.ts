import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { ComplexComponent } from './complex/complex.component';
import { ComponentWithServiceComponent } from './component-with-service/component-with-service.component';
import { MyServiceService } from './my-service.service';

const appRoutes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'complex', component: ComplexComponent },
  { path: 'component-with-service', component: ComponentWithServiceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ComplexComponent,
    ComponentWithServiceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { ComplexComponent } from './complex/complex.component';
import { ComponentWithServiceComponent } from './component-with-service/component-with-service.component';
import { MyServiceService } from './my-service.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { ComponentWithStateComponent } from './component-with-state/component-with-state.component';

const appRoutes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'complex', component: ComplexComponent },
  { path: 'component-with-service', component: ComponentWithServiceComponent},
  { path: 'component-with-state', component: ComponentWithStateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ComplexComponent,
    ComponentWithServiceComponent,
    ComponentWithStateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

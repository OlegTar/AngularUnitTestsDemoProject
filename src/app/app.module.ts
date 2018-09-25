import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ComplexComponent } from './complex/complex.component';
import { ComponentWithEffectsComponent } from './component-with-effects/component-with-effects.component';
import { ComponentWithServiceComponent } from './component-with-service/component-with-service.component';
import { ComponentWithStateComponent } from './component-with-state/component-with-state.component';
import { MyEffects } from './my-effects';
import { AppState, reducers } from './reducers';
import { SimpleComponent } from './simple/simple.component';


const appRoutes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'complex', component: ComplexComponent },
  { path: 'component-with-service', component: ComponentWithServiceComponent},
  { path: 'component-with-state', component: ComponentWithStateComponent},
  { path: 'component-with-effects', component: ComponentWithEffectsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ComplexComponent,
    ComponentWithServiceComponent,
    ComponentWithStateComponent,
    ComponentWithEffectsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers: [logger]}),
    EffectsModule.forRoot([MyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function logger(reducer_: ActionReducer<AppState>): ActionReducer<any, any> {
  return function (state: AppState, action: any): AppState {
      console.log('state', state);
      console.log('action', action);

      return reducer_(state, action);
  };
}

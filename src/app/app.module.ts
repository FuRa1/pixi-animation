import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing';
import { GreenLightModule } from './green-light/green-light.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    GreenLightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

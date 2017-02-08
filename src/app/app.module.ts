import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroComponent} from './hero.component';
import {AppComponent}  from './app.component';
import {HeroService} from './services/hero.service';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule {
}

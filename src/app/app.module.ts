import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero/hero.component";
import { HeroTexReturnComponent } from "./hero-tex-return/hero-tex-return.component";
import { HeroOfTheMonthComponent } from './hero-of-the-month/hero-of-the-month.component';
import { HeroContactComponent } from './hero-contact/hero-contact.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, HeroTexReturnComponent, HeroOfTheMonthComponent, HeroContactComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

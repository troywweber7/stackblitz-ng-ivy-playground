import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeButtonModule } from "./home-button/home-button.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [BrowserModule, FormsModule, HomeButtonModule, FlexLayoutModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

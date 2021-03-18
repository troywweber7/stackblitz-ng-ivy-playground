import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeButtonComponent } from "./home-button.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [HomeButtonComponent],
  exports: [HomeButtonComponent]
})
export class HomeButtonModule {}

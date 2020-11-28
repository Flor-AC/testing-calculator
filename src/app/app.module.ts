import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UiComponent} from './ui/ui.component';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

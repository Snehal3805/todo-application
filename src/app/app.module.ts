import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestpipesPipe } from './pipes/testpipes.pipe';
import { TestdirectivesDirective } from './directives/testdirectives.directive';



@NgModule({
  declarations: [
    AppComponent,
    TestpipesPipe,
    TestdirectivesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
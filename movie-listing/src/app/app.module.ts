import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserHomeNewComponent } from './user-home-new/user-home-new.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserHomePageComponent,
    UserHomeNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

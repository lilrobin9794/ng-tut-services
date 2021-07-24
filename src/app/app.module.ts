import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CmpAComponent } from './service/cmp-a.component';
import { CmpBComponent } from './service/cmp-b.component';
import { LogService } from './service/log.service';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpAComponent,
    CmpBComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

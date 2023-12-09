import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { InfinteScrollModuleComponent } from './infinte-scroll-module/infinte-scroll-module.component';
import { HttpClientModuleComponent } from './http-client-module/http-client-module.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoServiceComponent } from './photo-service/photo-service.component';

@NgModule({
  declarations: [
    AppComponent, 
    SearchComponent,
    InfinteScrollModuleComponent,
    HttpClientModuleComponent,
    PhotoServiceComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

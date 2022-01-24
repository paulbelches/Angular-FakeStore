import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DisplayComponent } from './display/display.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductComponent } from './product/product.component';
import { FiltersComponent } from './filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProductViewComponent } from './product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
//Material
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//Rating starts
import { NgRatingBarModule } from 'ng-rating-bar';
//Data Service

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideBarComponent,
    DisplayComponent,
    ProductGridComponent,
    ProductComponent,
    FiltersComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    //Material
    MatRadioModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatChipsModule,
    //Rating starts
    NgRatingBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

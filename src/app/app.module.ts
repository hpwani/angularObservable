import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './testdata';
import { EmployeeService } from './employee.service';
import { TestDb } from './testdb';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(TestData),
    InMemoryWebApiModule.forRoot(TestDb),
  ],
  providers: [BookService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

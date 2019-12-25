import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ImgSliderModule} from './img-slider/img-slider.module';
import {BlogComponent} from './blog/blog.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoComponent} from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogEditComponent,
    BlogDetailComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    ImgSliderModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesServicesService } from './services/movies-services.service';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:productID',  component: MyMovieComponentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [MoviesServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

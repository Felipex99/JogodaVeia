import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home-Component.component'
import { SquareComponent} from './square/square.component'
import { BoardComponent } from './board/board.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    SquareComponent, 
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

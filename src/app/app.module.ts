import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbAlertModule, NbButtonModule, NbLayoutColumnComponent, NbLayoutHeaderComponent, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent} from './square/square.component'
import { BoardComponent } from './board/board.component'
import { NbEvaIconsModule } from '@nebular/eva-icons';
@NgModule({
  declarations: [
    AppComponent, 
    SquareComponent, 
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({name: 'cosmic'}),
    NbAlertModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbButtonModule,
    NbLayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

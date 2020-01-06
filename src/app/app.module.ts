import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule}
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sampleComponent/sample.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { UserData } from './sampleComponent/user-data.service';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EditUserModalComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(UserData),
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [AppComponent]

})
export class AppModule { }

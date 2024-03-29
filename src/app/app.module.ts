import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, UserComponent, AssignmentOneComponent],
  imports: [BrowserModule, FormsModule], // FormsModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

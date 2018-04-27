import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AppRouter } from './app.router';
import { ContentModule } from './content/content.module';
import { SandboxModule } from './sandbox/sandbox.module';
import { AppService } from './content/core/app.service';
import { UserService } from './content/core/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ContentRouter } from './content/content.router';
import { SearchService } from './content/core/search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ContentModule,
    SandboxModule,
    HttpClientModule,
    AppRouter,
    ContentRouter,
  ],
  providers: [
    AppService,
    UserService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

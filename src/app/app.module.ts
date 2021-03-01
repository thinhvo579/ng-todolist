import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {childcontactComponent} from './contact/childcontact/childcontact.component';
import { AddnoteComponent } from './addnote/addnote.component';
const routesConfig: Routes = [
  {
    path:'about',
    component: AboutComponent

  },
  {
    path:'contact',
    component: ContactComponent

  },
  {
    path:'list',
    component: ListComponent

  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AboutComponent,
    ContactComponent,
    childcontactComponent,
    AddnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

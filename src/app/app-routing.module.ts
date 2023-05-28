import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent},
  { path: 'contact-page', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

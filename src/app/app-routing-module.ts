import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CanopyComponent } from './canopy/canopy.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';


const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'canopy', component: CanopyComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'blog', component: BlogComponent },
    { path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule

  ]
})
export class AppRoutingModule {

}

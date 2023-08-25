import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LiveJobFormComponent } from './live-job-form/live-job-form.component';
import { FillQuoteFormComponent } from './fill-quote-form/fill-quote-form.component';
import { FutureJobFormComponent } from './future-job-form/future-job-form.component';
import { JobCompletionFormComponent } from './job-completion-form/job-completion-form.component';
import { DiscountFormComponent } from './discount-form/discount-form.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/live-job-form', pathMatch: 'full' },
  { path: 'live-job-form', component: LiveJobFormComponent },
  { path: 'quote-form', component: FillQuoteFormComponent },
  { path: 'future-job-form', component: FutureJobFormComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'job-completion-form', component: JobCompletionFormComponent },
  { path: 'discount-form', component: DiscountFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



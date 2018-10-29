import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {FreeTrialComponent} from './components/free-trial/free-trial.component';
import {InclusionsComponent} from './components/inclusions/inclusions.component';
import {CustomersComponent} from './components/customers/customers.component';
import {ResourcesComponent} from './components/resources/resources.component';
import {WebpageComponent} from './components/webpage/webpage.component';

const APP_ROUTES: Routes = [
    {path: '', component: WebpageComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {Routing} from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FreeTrialComponent } from './components/free-trial/free-trial.component';
import { InclusionsComponent } from './components/inclusions/inclusions.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { WebpageComponent } from './components/webpage/webpage.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RegistrationComponent,
        FreeTrialComponent,
        InclusionsComponent,
        CustomersComponent,
        ResourcesComponent,
        WebpageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        Routing,
    ],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {}
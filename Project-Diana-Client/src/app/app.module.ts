import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/configuration/core.module';
import { APP_PROVIDERS } from 'src/app/configuration/provider-configuration';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

const CORE_COMPONENTS = [AppComponent, FooterComponent, NavComponent];

@NgModule({
  declarations: [CORE_COMPONENTS],
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    CoreModule,
    SharedModule,
  ],
  providers: APP_PROVIDERS,
  bootstrap: [CORE_COMPONENTS],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AuthComponent } from './components/auth/auth.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { CommandeFormComponent } from './components/commande-form/commande-form.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { JourninfoComponent } from './components/journinfo/journinfo.component';
import { ListcommandeComponent } from './components/listcommande/listcommande.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { ServdevComponent } from './components/servdev/servdev.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav' ;
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbComponent } from './components/navb/navb.component' ;
import { MatListModule } from '@angular/material/list' ;
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccueilComponent,
    AuthComponent,
    BoutiqueComponent,
    CommandeFormComponent,
    CompetencesComponent,
    DashboardComponent,
    FooterComponent,
    FourOhFourComponent,
    JourninfoComponent,
    ListcommandeComponent,
    NavbarComponent,
    PartenairesComponent,
    ServdevComponent,
    NavbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    NgImageSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,

    FormsModule,
    RouterModule

  ],
  exports: [
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
      MatToolbarModule,
      FlexLayoutModule,

      RouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

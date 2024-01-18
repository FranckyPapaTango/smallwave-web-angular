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
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { ServdevComponent } from './components/servdev/servdev.component';


import { NavbComponent } from './components/navb/navb.component' ;


import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgxPayPalModule } from 'ngx-paypal';
import { CartComponent } from './components/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

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
    PartenairesComponent,
    ServdevComponent,
    NavbComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,

    FlexLayoutModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,

    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    NgxPayPalModule

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

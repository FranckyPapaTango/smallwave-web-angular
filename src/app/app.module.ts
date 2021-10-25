import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { ServdevComponent } from './servdev/servdev.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { JourninfoComponent } from './journinfo/journinfo.component';
import { CompetencesComponent } from './competences/competences.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { AboutComponent } from './about/about.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CrudComponent } from './crud/crud.component';
import { AuthGuard } from './services/auth-guard.service';
import { NewCommandeComponent } from './new-commande/new-commande.component';
import { CommandesListeComponent } from './commandes-liste/commandes-liste.component';
import { CommandesService } from './services/commandes.service';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'journinfo', component: JourninfoComponent },
  { path: 'partenaires', component: PartenairesComponent },
  { path: 'servdev', component: ServdevComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'crud', canActivate:[AuthGuard],component: CrudComponent },
  { path: 'new-commande', canActivate: [AuthGuard], component: NewCommandeComponent },
  { path: 'commandes-liste', canActivate: [AuthGuard], component: CommandesListeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo : "/not-found"}
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    ServdevComponent,
    BoutiqueComponent,
    JourninfoComponent,
    CompetencesComponent,
    PartenairesComponent,
    AboutComponent,
    FooterComponent,
    AuthComponent,
    FourOhFourComponent,
    CrudComponent,
    NewCommandeComponent,
    CommandesListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,AuthGuard,CommandesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

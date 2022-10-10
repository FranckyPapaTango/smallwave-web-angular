import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { ServdevComponent } from './components/servdev/servdev.component';
import { JourninfoComponent } from './components/journinfo/journinfo.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { AboutComponent } from './components/about/about.component';
import { ListcommandeComponent } from './components/listcommande/listcommande.component';
import { CommandeFormComponent } from './components/commande-form/commande-form.component';


import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardService } from './services/authguard.service';


const routes: Routes = [
  { path : '' , component : AccueilComponent },
  { path : 'accueil' , component : AccueilComponent },
  { path : 'boutique' , component : BoutiqueComponent },
  { path : 'servdev' , component : ServdevComponent },
  { path : 'journinfo' , component : JourninfoComponent },
  { path : 'competences' , component : CompetencesComponent },
  { path : 'partenaires' , component : PartenairesComponent },
  { path : 'about' , component : AboutComponent },
  { path : 'listcommande' , component : ListcommandeComponent , canActivate: [AuthguardService] },
  { path : 'commandeform' , component : CommandeFormComponent },
  { path : 'commandeform/:id', component: CommandeFormComponent },

  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo : "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgbModule ,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import { AppComponent } from './app.component';
import { BaselayoutComponent } from './layout/baselayout/baselayout.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ContentComponent } from './layout/content/content.component';
import {ProjectmenuService} from './layout/navigation/services/projectmenu.service';
import {SharedService} from './services/shared.service';
import { AppRoutingModule } from './app-route.module';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { MilestoneComponent } from './layout/milestone/milestone.component';
import { RiskandissuesComponent } from './layout/riskandissues/riskandissues.component';
import { WsrComponent } from './layout/wsr/wsr.component';
import { CommentsComponent } from './layout/comments/comments.component';
import { NgbdModalBasic } from './layout/milestone/milestone.modal';
import {NgbdModalWsr}   from './layout/wsr/wsr.modal';
import { NgbdTabsetBasic } from './layout/wsr/tabset.basic';
import { MilestonesComponent } from './layout/modal/milestones/milestones.component';
import { KeyUpdatesComponent } from './layout/modal/key-updates/key-updates.component';

@NgModule({
  declarations: [
    AppComponent,
    BaselayoutComponent,
    NavigationComponent,
    ContentComponent,
    HomelayoutComponent,
    MilestoneComponent,
    RiskandissuesComponent,
    WsrComponent,
    CommentsComponent,
    NgbdModalBasic,
    NgbdModalWsr,
    NgbdTabsetBasic,
    MilestonesComponent,
    KeyUpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ProjectmenuService,SharedService],
  bootstrap: [AppComponent,BaselayoutComponent]
})
export class AppModule { }

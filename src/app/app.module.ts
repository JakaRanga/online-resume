import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeComponent } from './resume/resume.component';
import { SkillBlockComponent } from './skill-block/skill-block.component';
import { ResumeLoaderService } from './resume-loader/resume-loader.service';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { LanguageBlockComponent } from './language-block/language-block.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { ResumeMobileComponent } from './resume-mobile/resume-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SkillBlockComponent,
    ExperienceBlockComponent,
    LanguageBlockComponent,
    ContactBlockComponent,
    LanguageBarComponent,
    ResumeMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FontAwesomeModule
  ],
  providers: [ ResumeLoaderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

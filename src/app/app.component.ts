import { Component } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { combineLatest, forkJoin, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { DisplayLanguage } from './models/display-language.model';
import { ResumeAssets } from './models/resume-assets.model';
import { ResumeData } from './models/resume-data.model';
import { ResumeLoaderService } from './resume-loader/resume-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faDownload = faDownload;

  resumeData: ResumeData;
  resumeAssets: ResumeAssets;
  availableLanguages: DisplayLanguage[] = [];

  constructor(private resumeService: ResumeLoaderService) {
    this.loadAvailableLanguages();
  }

  public onLanguageChange(language: DisplayLanguage): void {
    combineLatest([
      this.resumeService.getResumeInformationFromLanguage(language.code),
      this.resumeService.getResumeAssetsFromLanguage(language.code),
    ])
    .subscribe((res) => {
      this.resumeData = res[0];
      this.resumeAssets = res[1];
      console.log(language.code, res[1]);
    });
  }

  private loadAvailableLanguages(): void {
    this.resumeService.getDisplayLanguages().subscribe((res: DisplayLanguage[]) => {
      this.availableLanguages = res;
    })
  }

}

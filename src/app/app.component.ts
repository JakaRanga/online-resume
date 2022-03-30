import { ChangeDetectorRef, Component } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { combineLatest } from 'rxjs';
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

  constructor(
    private cd: ChangeDetectorRef,
    private resumeService: ResumeLoaderService) {
    this.loadAvailableLanguages();
  }

  public onLanguageChange(language: DisplayLanguage): void {
    this.resumeAssets = undefined;
    this.resumeData = undefined;
    combineLatest([
      this.resumeService.getResumeInformationFromLanguage(language.code),
      this.resumeService.getResumeAssetsFromLanguage(language.code),
    ])
      .subscribe((res) => {
        this.resumeData = res[0];
        this.resumeAssets = res[1];
        this.cd.detectChanges();
      });
  }

  private loadAvailableLanguages(): void {
    this.resumeService.getDisplayLanguages().subscribe((res: DisplayLanguage[]) => {
      this.availableLanguages = res;
    })
  }

}

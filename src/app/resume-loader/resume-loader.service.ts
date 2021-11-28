import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DisplayLanguage } from "../models/display-language.model";
import { ResumeAssetsI18n } from "../models/resume-assets-i18n.model";
import { ResumeAssets } from "../models/resume-assets.model";
import { ResumeData } from "../models/resume-data.model";
import { ResumeFile } from "../models/resume-file.model";

@Injectable({
  providedIn: 'root'
})
export class ResumeLoaderService {

  resumeFile: ResumeFile;

  constructor(private http: HttpClient) { }

  private getResumeFile(): Observable<ResumeFile> {
    if (this.resumeFile) {
      return from(new Observable<ResumeFile>((subject) => {
        subject.next(this.resumeFile)
      }));
    }
    else {
      return from(this.http.get<ResumeFile>('./assets/resume-information.json'))
        .pipe(map((file: ResumeFile) => {
          this.resumeFile = file;
          return file;
        }));
    }
  }

  public getResumeInformationFromLanguage(lang: string): Observable<ResumeData> {
    return from(this.getResumeFile()).pipe(
      map((file: ResumeFile) => {
        return file.data
          .find((data: ResumeData) => data.lang === lang);
      })
    )
  }

  public getDisplayLanguages(): Observable<DisplayLanguage[]> {
    return from(this.getResumeFile()).pipe(
      map((file: ResumeFile) => {
        return file.metadata.displayLanguages;
      })
    )
  }

  public getResumeAssetsFromLanguage(lang: string): Observable<ResumeAssets> {
    return from(this.getResumeFile()).pipe(
      map((file: ResumeFile) => {
        let assets: ResumeAssets = Object.assign({}, file.metadata.assets);
        assets.i18n = assets.i18n.filter((i18n: ResumeAssetsI18n) => i18n.code === lang)
        return assets;
      })
    )
  }

}

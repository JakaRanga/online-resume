import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faPhone, faLink, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ResumeAssetsI18n } from '../models/resume-assets-i18n.model';
import { ResumeAssets } from '../models/resume-assets.model';
import { ResumeData } from '../models/resume-data.model';

@Component({
  selector: 'ro-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  host: { 'class': 'ro-flex-fill ro-flex-column' }
})
export class ResumeComponent implements OnInit {

  @Input() resumeData: ResumeData;
  @Input() set resumeAssets(value: ResumeAssets) {
    this._resumeAssets = value;
    this.resumeAssetsI18n = this._resumeAssets.i18n[0];
  }
  get resumeAssets(): ResumeAssets {
    return this._resumeAssets;
  }
  private _resumeAssets: ResumeAssets;

  resumeAssetsI18n: ResumeAssetsI18n

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLink = faLink;
  faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
    this.resumeAssetsI18n = this.resumeAssets.i18n[0];
  }

  printAsPdf(componentName: string) {
    let printContents = document.getElementById(componentName).innerHTML;
    let originalContents = document.body.innerHTML;
    let originalTitle = document.title;

    document.body.innerHTML = printContents;
    document.title = this.resumeData.pdfName;

    window.print();

    document.body.innerHTML = originalContents;
    document.title = originalTitle;
  }
}

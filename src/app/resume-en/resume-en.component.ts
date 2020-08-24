import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faPhone, faLink, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ResumeData } from '../resume-loader/resume-loader.service';

@Component({
  selector: 'ro-resume-en',
  templateUrl: './resume-en.component.html',
  styleUrls: ['./resume-en.component.scss'],
  host: { 'class': 'ro-flex-fill ro-flex-column'}
})
export class ResumeEnComponent implements OnInit {

  @Input() resumeData: ResumeData;

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLink = faLink;
  faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
    console.log(this.resumeData)
  }

}

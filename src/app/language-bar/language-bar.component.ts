import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Indexor } from '../indexor/indexor';
import { DisplayLanguage } from '../models/display-language.model';

@Component({
  selector: 'ro-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent extends Indexor<DisplayLanguage> implements OnInit {

  @Input() languages: DisplayLanguage[];
  @Output() onLanguageChange: EventEmitter<DisplayLanguage> = new EventEmitter<DisplayLanguage>();

  langIndex: number;
  
  faLanguage = faLanguage;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.languages = super.sortByIndex(this.languages);
    this.languageChange(this.languages[0]);
  }

  public languageChange(language: DisplayLanguage): void {
    this.onLanguageChange.emit(language);
    this.langIndex = language.index;
  }



}

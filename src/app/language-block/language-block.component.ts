import { Component, OnInit, Input } from '@angular/core';
import { Indexor } from '../indexor/indexor';
import { Language } from '../models/language.model';

@Component({
  selector: 'ro-language-block',
  templateUrl: './language-block.component.html',
  styleUrls: ['./language-block.component.scss']
})
export class LanguageBlockComponent extends Indexor<Language> implements OnInit {

  private _languages: Language[];
  public get languages(): Language[] {
    return this._languages;
  }
  @Input()
  public set languages(v: Language[]) {
    this._languages = super.sortByIndex(v);
  }

  counter: Array<number> = [1, 2, 3, 4]

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.languages = super.sortByIndex(this.languages);
  }

}

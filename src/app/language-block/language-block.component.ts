import { Component, OnInit, Input } from '@angular/core';
import { Indexor } from '../indexor/indexor';
import { Language } from '../resume-loader/resume-loader.service';

@Component({
  selector: 'ro-language-block',
  templateUrl: './language-block.component.html',
  styleUrls: ['./language-block.component.scss']
})
export class LanguageBlockComponent extends Indexor<Language> implements OnInit {

  @Input() languages: Language[]

  counter: Array<number> = [1, 2, 3, 4]

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.languages = super.sortByIndex(this.languages);
  }

}

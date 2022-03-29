import { Component, OnInit, Input } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Indexor } from '../indexor/indexor';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'ro-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent extends Indexor<Experience> {

  faCircle = faCircle;

  private _experiences: Experience[];
  public get experiences(): Experience[] {
    return this._experiences;
  }
  @Input()
  public set experiences(v: Experience[]) {
    this._experiences = super.sortByIndex(v);
  }


  constructor() {
    super();
  }
}


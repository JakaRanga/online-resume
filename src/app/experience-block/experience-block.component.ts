import { Component, OnInit, Input } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Indexor } from '../indexor/indexor';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'ro-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent extends Indexor<Experience> implements OnInit {

  faCircle = faCircle;

  @Input() experiences: Experience[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.experiences = super.sortByIndex(this.experiences);
  }

}

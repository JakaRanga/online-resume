import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/resume-loader/resume-loader.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Indexor } from '../indexor/indexor';

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

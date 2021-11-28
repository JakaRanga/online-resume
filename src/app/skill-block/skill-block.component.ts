import { Component, OnInit, Input } from '@angular/core';
import { Indexor } from '../indexor/indexor';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'ro-skill-block',
  templateUrl: './skill-block.component.html',
  styleUrls: ['./skill-block.component.scss']
})
export class SkillBlockComponent extends Indexor<Skill> implements OnInit {


  @Input() skills: Skill[];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.skills = super.sortByIndex(this.skills);
  }

}

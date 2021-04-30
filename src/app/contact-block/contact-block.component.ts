import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../resume-loader/resume-loader.service';

@Component({
  selector: 'ro-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.scss']
})
export class ContactBlockComponent implements OnInit {

  @Input() contacts: Contact[] 

  constructor() { }

  ngOnInit(): void {
  }

}

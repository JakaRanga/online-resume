import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'ro-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.scss']
})
export class ContactBlockComponent {

  @Input() contacts: Contact[] 

  constructor() { }

}

import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import {CONTACTS} from '../mock-contacts'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
    contactlist:any=[];
    isContactSelected=false;
    contactcreate=false;
    name:any;
    Mobile_number:any;
   contacts= CONTACTS;
   selectedContact: Contact;
  constructor() { }
  ngOnInit(): void {
    this.isContactSelected=false;
    this.contactlist=this.contacts;
    this.contactcreate=false;
     console.log('vaishali',this.contactlist);
  }

  onSelect(contact: Contact): void {
    this.isContactSelected=true;
    this.selectedContact = contact;
    console.log('vaishali',this.selectedContact);

  }
  createContact(){
    this.contactcreate=true;

  }
  clickContact(){
    //  this.contactlist.name=this.name;
    //  this.contactlist.Mobile_number=this.Mobile_number;
    this.contactlist.push({'Mobile_number':this.Mobile_number,'name':this.name})
     alert('Contact created!')
  }
  backToDiary(){

    this.contactcreate=false;

     

  }













}

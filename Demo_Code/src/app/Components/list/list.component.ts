import { Component, OnInit } from '@angular/core';
import { PhoneBookModel} from '../../Models/PhoneBookModel';
  import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //#regions "Member variables"

  public phoneBookModel: PhoneBookModel = new PhoneBookModel();
  public phoneBookList: Array<PhoneBookModel> = new Array<PhoneBookModel>();

  //#endregion

  constructor() {
this.phoneBookList = this.getDemoPhoneBook();

  }

  ngOnInit() {
  }

  addPhoneBook(): void {
    this.phoneBookModel = new PhoneBookModel();
  }

  getDemoPhoneBook(): any {
   let lstPhoneBook = new Array<PhoneBookModel>();
   let phoneBook  = new PhoneBookModel();

   phoneBook.phoneBookID = 1;
   phoneBook.name = "Jafar";
   phoneBook.surname = "Ulla";
   phoneBook.designation = "Sr. SE";
   phoneBook.email="email@email.com";
   phoneBook.phoneNo="12345";
   lstPhoneBook.push(phoneBook);

   return lstPhoneBook;
  }



}

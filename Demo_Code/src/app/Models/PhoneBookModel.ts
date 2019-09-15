export class PhoneBookModel  {

  constructor(){}
   // constructor(_phoneBookID?: number);
//   constructor(_phoneBookID?: number, _name?: string, _surname?: string,  email?: string, designation?: string
//     , phoneNo?: string
//     ){
// this.phoneBookID = _phoneBookID;
//   }

  phoneBookID: number;
  name: string;
  surname: string;
  email: string;
  designation: string;
  phoneNo: string = "";
  imageURL: string;
  icDispatchNo:string;
  icDispatchUserPhoneBookID:number;
  agentID:string;
}

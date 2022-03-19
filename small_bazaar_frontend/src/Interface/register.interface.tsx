export interface Iregister {
  firstname: string;
  lastname: string;
  gender: string;
  dateofbirth: string;
  email: string;
  password: string;
}

export interface Ilogin {
  email: string;
  password: string;
}

export interface IaddItem {
  itemname: string;
  itemprice: string;
  itemcategory: string;
  itemurl: string;
}

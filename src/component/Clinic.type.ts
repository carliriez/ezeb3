export interface IClinic {
  id?: string;
  name: string;
  address: string;
  contact: number;
  branch: string;
  website: string;
}

export enum PageEnum {
  list,
  add,
  edit,
}

//axios.post('baseURL/api', {
//clinicName: //value ng form name field
//clinicAddress: //value ng form address field
//})

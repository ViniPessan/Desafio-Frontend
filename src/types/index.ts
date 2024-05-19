export interface Address {
  street: string;
  district: string;
  city: string;
  state: string;
  number: string;
  cep: string;
}

export interface Enterprise {
  id?: string; 
  name: string;
  type: string;
  status: "RELEASE" | string; 
  purpose: "HOME" | string; 
  address: Address;
}

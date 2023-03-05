export interface ICompany {
  id: string;
  name: string;
  description: string;
  created_at: Date;
}

export interface ICompanyCreate {
  name: string;
  description: string;
  password: string;
}

export interface ICompanyLogin {
  name: string;
  password: string;
}

export interface IListOneCompany {
  authorization?: string;
}

export interface IStorage {
  id: string;
  productName: string;
  price: number;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export interface IStorageCreate {
  name: string;
  price: string;
  description: string;
}

export interface IStorageUpdate {
  name?: string;
  description?: string;
  price?: string;
  id?: string;
}

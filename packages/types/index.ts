export interface User {
    id: number;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  

  export interface Store {
    Products:Array<Product>
    AddProducts: () => void
  }
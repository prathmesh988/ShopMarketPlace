import {create} from "zustand";
import {Store,Product} from "@service/types"


const CartStore  = create((set)=>({
  Products:[],
  AddProducts:(Proudct:Product)=> set((state:Store)=>({Products:[...state.Products ,Proudct]}))

}))
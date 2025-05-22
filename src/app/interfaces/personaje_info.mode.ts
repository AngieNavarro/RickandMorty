import { personaje } from "./personaje.mode"

export interface personaje_info{
 info:{
  count:number,
  pages:number,
  next:string,
  prev:string
 },
 results:personaje[]
}

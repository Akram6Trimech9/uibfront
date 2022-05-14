import { agence } from "./agence";
import { calendar } from "./calendar";
export interface users {
     _id: string;
    nom: string ;
    prenom: string ;
    mdp:string
    genre: string ;
    numtel: string ;
    cin: string ;
    email: string ;
    image:string ; 
    agence:agence;
    calendar:calendar;
  }
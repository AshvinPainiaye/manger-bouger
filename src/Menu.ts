import Consommateur from "./Consommateur";


class Menu {

    private boisson: string;
    private plats: string;
    private quantite: number;

    constructor(boisson: string , plats: string, quantite: number){
        this.boisson = boisson;
        this.plats = plats;
        this.quantite = quantite;
    }

   

}

let menu = new Menu("coca" , "boudin" , 5);

export default class Consommateur {

    private taille: number;
    private poids: number;
    private age: number;
    private sexe: string;


    constructor(taille: number, poids:number, age:number,sexe:string){
        this.taille = taille;
        this.poids = poids;
        this.age = age;
        this.sexe = sexe;

         let submit = document.getElementById('submitConsommateur')
         submit.addEventListener("submit" , (event)=>{console.log(event)}  )
        
    }

     get nbCalorie(): number {

        
        let nbCalorie: number;
        if(this.Sexe == "femme") {
             nbCalorie =  9.740 * this.Poids + 172.9 * this.Taille - 4.737 * this.Age + 667.051;
                    
        }
        else{
             nbCalorie =  13.707 * this.Poids + 492.3 * this.Taille - 6.673 * this.Age + 77.607;
        }
         console.log(nbCalorie);
         return nbCalorie;
          
         
    }


    get Taille() {

        return this.taille;
    
    }

    get Poids() {
        return this.poids;
    
    }

    get Age() {
        return this.age;
    
    }

    get Sexe() {
        return this.sexe;
    }

    
   


}

let consommateur = new Consommateur(195,90,21,"femme");
consommateur.nbCalorie;
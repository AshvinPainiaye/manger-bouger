
export default class Consommateur {

     getNbCalorie(taille: number, poids:number, age:number,sexe:string) {

        let nbCalorie: number;
        if(sexe == "femme") {
             nbCalorie =  9.740 * poids + 172.9 * taille - 4.737 * age + 667.051;
             
                    
        }
        else if (sexe == "homme"){
             nbCalorie =  13.707 * poids + 492.3 * taille - 6.673 * age + 77.607;
             
        }
        console.log(nbCalorie);
         return nbCalorie;
          
         
    }


   
    public submit(): Array<any> 
    {
        let taille = parseFloat((<HTMLInputElement>document.getElementById('taille')).value);
        let poids = parseInt((<HTMLInputElement>document.getElementById('poids')).value);
        let age = parseInt((<HTMLInputElement>document.getElementById('age')).value);
        let sexe = (<HTMLInputElement>document.getElementById('sexe')).value;

    

       return [taille ,  poids ,  age , sexe] ;
    }
}

let consommateur = new Consommateur();


let submit = document.getElementById('submitConsommateur');
submit.onsubmit = function(e)
{
    e.preventDefault()
    let info = consommateur.submit();
    consommateur.getNbCalorie(info[0] , info[1] , info[2] , info[3])
             
}



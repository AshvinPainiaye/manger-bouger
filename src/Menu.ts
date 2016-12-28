class Menu {

   public submit(): Array<any> 
   {
       let boisson = (<HTMLInputElement>document.getElementById('boisson')).value;
       let plats = (<HTMLInputElement>document.getElementById('plats')).value;
       let quantite = parseInt((<HTMLInputElement>document.getElementById('quantite')).value);
   
      return [boisson,plats,quantite] ;
   }
 

}

let menu = new Menu();

let submitMenu = document.getElementById('submitMenu');
submitMenu.onsubmit = function(e)
{
   e.preventDefault()
   let info = menu.submit();
   console.log(info);
}
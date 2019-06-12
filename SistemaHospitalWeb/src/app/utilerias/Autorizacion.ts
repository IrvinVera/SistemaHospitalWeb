import {Router} from "@angular/router";

export class Autorizacion{
    constructor (private router: Router){}

    cargarPantalla(){
        switch(localStorage.getItem("rol")){
            case null:
                this.router.navigate(['/']);
            break;

            case "Coordinador":
                this.router.navigate(['/coordinador']);
            break;

            case "Recepcionista":
                this.router.navigate(['/recepcionista']);
            break;

            case "Médico":
                this.router.navigate(['/medico']);
            break;
        }
    }
}
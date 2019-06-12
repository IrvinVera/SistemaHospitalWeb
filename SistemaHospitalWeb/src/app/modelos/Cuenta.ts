import { Persona } from './Persona';

export class Cuenta {    
    idCuenta: number;
    nombreUsuario: string;
    contrasena: string;    
    persona: Persona;

    constructor(idCuenta: number, nombreUsuario: string, contrasena: string, persona: Persona ){
        this.contrasena = contrasena;
        this.idCuenta = idCuenta;
        this.nombreUsuario = nombreUsuario;  
        this.persona = persona;      
    }
}
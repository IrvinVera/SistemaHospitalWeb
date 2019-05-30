import { Persona } from './Persona';

export class Paciente extends Persona{
    genero:string;

    constructor(idPersona: number, nombre: string, apellidos: string, correo: string, telefono: string,
        fechaNacimiento: Date, genero:string) {            
            super(idPersona, nombre, apellidos, correo, telefono, fechaNacimiento); 
            this.genero = genero; 
        }
}
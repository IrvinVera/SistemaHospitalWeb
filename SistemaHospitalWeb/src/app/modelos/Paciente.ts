import { Persona } from './Persona';

export class Paciente extends Persona{

    constructor(idPersona: number, nombre: string, apellidos: string, correo: string, telefono: string,
        rol: string, genero: string,fechaNacimiento: Date) {            
            super(idPersona, nombre, apellidos, correo, telefono, rol, genero, fechaNacimiento); 
        }
}
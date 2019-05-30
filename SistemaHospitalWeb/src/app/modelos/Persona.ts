export abstract class Persona{
    idPersona: number;
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    fechaNacimiento: Date;
    //rol definir si es una clase o es un string 
    
    constructor(idPersona: number, nombre: string, apellidos: string, correo: string, telefono: string,
        fechaNacimiento: Date){
            this.idPersona = idPersona;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.correo = correo;
            this.telefono = telefono;
            this.fechaNacimiento = fechaNacimiento;
    }
}
export class Persona{
    idPersona: number;
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    rol: string ;
    genero: string;
    fechaNacimiento: Date;

    constructor(idPersona: number, nombre: string, apellidos: string, correo: string, telefono: string,
        rol: string, genero: string, fechaNacimiento: Date){
            this.idPersona = idPersona;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.correo = correo;
            this.telefono = telefono;
            this.rol = rol;
            this.genero = genero;
            this.fechaNacimiento = fechaNacimiento;
    }
}
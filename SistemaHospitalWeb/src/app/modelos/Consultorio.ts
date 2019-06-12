import { Persona } from './Persona';
import { Consulta } from './Consulta';

export class Consultorio{
    idConsultorio: number;
    numeroConsultorio: string;
    estado: string;
    persona: Persona;
    consultas: Consulta;

    constructor(idConsultorio: number, numeroConsultorio: string, estado: string, 
        persona: Persona, consultas: Consulta){
            this.idConsultorio = idConsultorio;
            this.numeroConsultorio = numeroConsultorio;
            this.estado = estado;
            this.persona = persona;
            this.consultas = consultas;
    }
}
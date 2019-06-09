import { Consultorio } from './Consultorio';
import { Persona } from './Persona';
import { Receta } from './Receta';

export class Consulta{
    idConsulta: number;
    horaInicio: Date;
    horaFin: Date;
    consultorio: Consultorio;
    persona: Persona;
    receta: Receta;
}
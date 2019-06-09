import { Persona } from '../modelos/Persona';

export class PersonaImplementacion {
    constructor() {}

    obtenerTodos(): Array<Persona>{
        let paciente1 = new Persona(1,"José Alonso", "Lora Gonzalez", "alonso@gmail.com", "2288589865","Médico","Masculino",new Date(),);
        let paciente2 = new Persona(2,"Irvin Dereb", "Vera López", "irvin@gmail.com", "2288589865", "Paciente","Masculino",new Date());
        let paciente3 = new Persona(3,"María", "Hernández Gomez", "maria@gmail.com", "2288589865", "Recepcionista","Femenino",new Date());
        let paciente4 = new Persona(4,"Alicia", "Melchor Pérez", "alicia@gmail.com", "2288589865", "Paciente","Femenino",new Date());
        let paciente5 = new Persona(5,"Christian", "Ubaldo Promotor", "chris@gmail.com", "2288589865","Recepcionista","Masculino", new Date());
        let paciente6 = new Persona(6,"Brenda", "Mendez Martinez", "maria@gmail.com", "2288589865","Médico","Femenino", new Date());
        return new Array(paciente1, paciente2, paciente3, paciente4, paciente5, paciente6);
    }

    registrar(Persona: Persona): boolean{
        return true; //TO DO
    }

    editar(Persona: Persona): boolean{
        return true; //TO DO
    }

    eliminar(idPersona: number): boolean{
        return true; //TO DO
    }
}
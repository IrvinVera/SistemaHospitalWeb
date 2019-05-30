import { Paciente } from "src/app/modelos/Paciente";

export class ListaEsperaNucleo{
    constructor() { }

    agregar(paciente: Paciente) {
        //TO DO
    }

    mostrar(): Array<Paciente> {
        let paciente1 = new Paciente(1,"José Alonso", "Lora Gonzalez", "alonso@gmail.com", "2288589865",new Date(),"M");
        let paciente2 = new Paciente(2,"Irvin Dereb", "Vera López", "irvin@gmail.com", "2288589865",new Date(),"M");
        let paciente3 = new Paciente(3,"María", "Hernández Gomez", "maria@gmail.com", "2288589865",new Date(),"F");
        let paciente4 = new Paciente(4,"Alicia", "Melchor Pérez", "alicia@gmail.com", "2288589865",new Date(),"F");
        let paciente5 = new Paciente(5,"Christian", "Ubaldo Promotor", "chris@gmail.com", "2288589865",new Date(),"M");
        let paciente6 = new Paciente(6,"Brenda", "Mendez Martinez", "maria@gmail.com", "2288589865",new Date(),"F");
        return new Array(paciente1,paciente2,paciente3, paciente4, paciente5, paciente6); // TO DO
    }

    mover(paciente:Paciente){
        //TO DO
    }

    posponer(paciente:Paciente){
        //TO DO
    }

    quitar(paciente:Paciente){
        //TO DO
    }
}
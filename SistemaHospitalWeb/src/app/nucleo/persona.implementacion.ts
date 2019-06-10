import { Persona } from '../modelos/Persona';
import { PersonaService } from '../persona.service';

export class PersonaImplementacion {
    constructor(private personaService: PersonaService) {}

    obtenerTodos(): Persona[]{
        let personas: Persona[];
        this.personaService.obtenerPersonas().subscribe(personasBD => {personas = personasBD;
        console.log(personas)}); 
        console.log(personas);     
        return personas;
    }

    registrar(persona: Persona): boolean{        
        this.personaService.registrarPersona(persona).subscribe();
        return true; //TO DO
    }

    editar(Persona: Persona): boolean{
        return true; //TO DO
    }

    eliminar(idPersona: number): boolean{
        return true; //TO DO
    }
}
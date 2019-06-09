import { Medicamento } from '../modelos/Medicamento';

export class MedicamentoImplementacion {
    
    constructor() { }

    obtenerMedicamentos():Array<Medicamento>{
        var medicamento = new Medicamento(1,50,"compuesto 1", "Paracetamol","Tableta");
        return new Array(medicamento);
    }
}
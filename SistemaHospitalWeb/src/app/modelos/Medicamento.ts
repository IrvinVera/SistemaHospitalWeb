export class Medicamento{
    idMedicamento: number;
    cantidad: number;
    compuesto: string;
    nombre: string;
    presentacion: string;

    constructor(idMedicamento: number, cantidad: number, compuesto: string, nombre: string,
        presentacion: string){
            this.idMedicamento = idMedicamento;
            this.cantidad = cantidad;
            this.compuesto = compuesto;
            this.nombre = nombre;
            this.presentacion = presentacion;
    }
}
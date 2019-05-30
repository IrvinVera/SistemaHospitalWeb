class Cuenta {
    contraseña: string;
    idCuenta: number;
    nombreUsuario: string;

    constructor(contraseña: string, idCuenta: number, nombreUsuario: string ){
        this.contraseña = contraseña;
        this.idCuenta = idCuenta;
        this.nombreUsuario = nombreUsuario;
    }
}
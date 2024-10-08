//clase alumno
export class Alumno {
    constructor(nombre, apellidos, colorPelo) {
        this.Nombre = nombre;
        this.Apellidos = apellidos;
        this.ColorPelo = colorPelo;
       
    }
    //getter y setter
    get Nombre() {
        return this.nombre
    }
    set Nombre(nombre) {
        if(nombre != null) {
            this.nombre = nombre
        }else{
            this.nombre = "Anonimo";
        }
    }
    get Apellidos() {
        return this.apellidos
    }
    set Apellidos(apellidos) {
       if(apellidos != null) {
           this.apellidos = apellidos
       }else{
           this.apellidos = "Anonimo";
       }
    }
    get ColorPelo() {
        return this.colorPelo
    }
    set ColorPelo(colorPelo) {
       if(colorPelo != null) {
           this.colorPelo = colorPelo
       }else{
           this.colorPelo = "Calvo";
       }
    }
}
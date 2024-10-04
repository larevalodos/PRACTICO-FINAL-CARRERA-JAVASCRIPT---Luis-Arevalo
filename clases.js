class Biblioteca {
    constructor(nombre) {
        this._nombre = nombre;
        this._registros = [];
        this._cantidad = 0;
    }
    get cantidad(){
        return this._cantidad;
    }

    obtenerRegistros() {
        return this._registros;
    }

    agregarRegistro(libro) {
        this._registros.push(libro);
        this._cantidad++;
    }

    limpiarRegistros() {
        this._registros = [];
        this._cantidad = 0;
    }
}
//almacenariamos libros por lo que al ser iguales todas las clases "Computación, Matematicas, Psicología y Literatura" me parece que podian estar en la clase libro
class Libro {
    constructor(id, tipo, nombre, anio, cantidad) {
        this._id = id;
        this._tipo = tipo;
        this._nombre = nombre;
        this._anio = anio;
        this._cantidad = cantidad;
    }
    
    get id(){
        return this._id;
    }
    get tipo(){
        return this._tipo;
    }
    get nombre(){
        return this._nombre;
    }
    get anio(){
        return this._anio;
    }
    get cantidad(){
        return this._cantidad;
    }
}

export { Biblioteca, Libro };
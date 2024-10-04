import { mostrarAlerta, actualizarTabla, limpiarTabla,actualizarListaDesplegable,limpiarListaDesplegable,filtrarTablaPorId, filtrarTablaPorNombre } from './funciones.js';
import { Biblioteca, Libro } from './clases.js';

const biblioteca = new Biblioteca('Mi Biblioteca');

document.getElementById('formularioLibros').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('id').value;
    const tipo = document.getElementById('tipo').value;
    const nombre = document.getElementById('nombre').value;
    const anio = document.getElementById('anio').value;
    const cantidad = document.getElementById('cantidad').value;

    if (biblioteca.obtenerRegistros().some(libro => libro.id === id)) {
        mostrarAlerta('El ID ya existe en la biblioteca.');
        return;
    }

    const nuevoLibro = new Libro(id, tipo, nombre, anio, cantidad);
    biblioteca.agregarRegistro(nuevoLibro);
    
    actualizarTabla(nuevoLibro);
    actualizarListaDesplegable(id);
    mostrarAlerta('Registro de nuevo libro exitoso.');
    document.getElementById('contadorLibros').textContent = biblioteca.cantidad;
});

document.getElementById('filtroNombre').addEventListener('input', function() {
    const filtroNombre = document.getElementById('filtroNombre').value;
    filtrarTablaPorNombre(filtroNombre);
});
document.addEventListener("DOMContentLoaded", () => {
    const filtroIdSelect = document.getElementById("filtroId");
    filtroIdSelect.addEventListener("change", function() {
    const id = document.getElementById('filtroId').value;
    filtrarTablaPorId(id);
    });

});

document.getElementById('reiniciarWeb').addEventListener('click', function() {
    biblioteca.limpiarRegistros();
    limpiarTabla();
    limpiarListaDesplegable();
    document.getElementById('contadorLibros').textContent = 0;
});


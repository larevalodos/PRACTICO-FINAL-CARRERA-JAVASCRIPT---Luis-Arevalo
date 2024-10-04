function mostrarAlerta(mensaje) {
    alert(mensaje);
}

 function actualizarTabla(libro) {
    const tabla = document.getElementById('tablaLibros');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${libro.id}</td>
        <td>${libro.tipo}</td>
        <td>${libro.nombre}</td>
        <td>${libro.anio}</td>
        <td>${libro.cantidad}</td>
    `;
    tabla.appendChild(fila);
}

 function limpiarTabla() {
    document.getElementById('tablaLibros').innerHTML = '';
}

 function actualizarListaDesplegable(id) {
    const select = document.getElementById('filtroId');
    const option = document.createElement('option');
    option.value = id;
    option.textContent = id;
    select.appendChild(option);
}

 function limpiarListaDesplegable() {
    const select = document.getElementById('filtroId');
    select.innerHTML = '<option value="Todos">Todos</option>';
}

 function filtrarTablaPorNombre(nombre) {
    const filas = document.querySelectorAll('#tablaLibros tr');
    filas.forEach(fila => {
        const textoNombre = fila.children[2].textContent.toLowerCase();
        fila.style.display = textoNombre.includes(nombre.toLowerCase()) ? '' : 'none';
        console.log(fila.style.display);
    });
 }
 function filtrarTablaPorId(id) {
    const filas = document.querySelectorAll('#tablaLibros tr');
    filas.forEach(fila => {
        const textoId = fila.children[0].textContent.toLowerCase();
      fila.style.display =  id=='Todos'? '': textoId.includes(id.toString().toLowerCase())? '' : 'none';
    });
 }

 export { mostrarAlerta, actualizarTabla, limpiarTabla,actualizarListaDesplegable,limpiarListaDesplegable,filtrarTablaPorId, filtrarTablaPorNombre};
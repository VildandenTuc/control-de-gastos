let listaNombreGastos = [];
let listaValorGastos = [];


function clickBoton() {
  let nombreGasto = document.getElementById('nombreGasto').value;
  let valorGasto = document.getElementById('valorGasto').value;

  listaNombreGastos.push(nombreGasto);
  listaValorGastos.push(parseFloat(valorGasto));
  actualizarListaGastos();
  limpiar();
  document.getElementById('nombreGasto').focus();
}

function actualizarListaGastos() {
  let htmlLista = '';
  const listaElement = document.getElementById('listaDeGastos');
  let totalGastos = 0.0;
  const limiteTotalGastos = 30000.00;

  listaNombreGastos.forEach((element,position) => {
    const valorGasto = listaValorGastos[position];
    totalGastos += valorGasto;
    if(totalGastos > limiteTotalGastos){
      alert(`Se ha excedido del límite total de gastos previsto en AR$ ${limiteTotalGastos}`);
    }
    htmlLista +=  `<li>${element} - AR$${valorGasto} 
                  <div class="botonera">              
                    <button onclick="modificarGasto(${position});">Modificar</button>  
                    <button onclick="eliminarGasto(${position});">Eliminar</button>
                  </div>
                  </li>`;
  });
  listaElement.innerHTML = htmlLista;
  document.getElementById('totalGastos').innerText = totalGastos;
}

function limpiar() {
  document.getElementById('nombreGasto').value = '';
  document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
  listaNombreGastos.splice(posicion,1);
  listaValorGastos.splice(posicion,1);
  actualizarListaGastos();
  document.getElementById('nombreGasto').focus();
}

function modificarGasto(posicion) {
  let nuevoValor = parseFloat(prompt("Ingrese el nuevo valor del gasto."));
  listaValorGastos[posicion] = nuevoValor;
  actualizarListaGastos();
  limpiar();
  document.getElementById('nombreGasto').focus();
}
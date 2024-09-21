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
  // console.log(listaNombreGastos);
  // console.log(listaValorGastos);
  // alert("Presiono el boton");
}

function actualizarListaGastos() {
  let htmlLista = '';
  const listaElement = document.getElementById('listaDeGastos');
  let totalGastos = 0.0;

  listaNombreGastos.forEach((element,position) => {
    const valorGasto = listaValorGastos[position];
    totalGastos += valorGasto;
    htmlLista +=  `<li>${element} - AR$${valorGasto} 
                  <button onclick="eliminarGasto(${position});">Eliminar</button>
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
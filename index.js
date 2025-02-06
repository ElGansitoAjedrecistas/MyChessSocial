// script.js

function irAInicio() {
  document.getElementById("contenido").innerHTML = `
    <h1>Página de Inicio</h1>
    <p>¡Bienvenido a la página principal!</p>`;
}

function mostrarAmigos() {
  document.getElementById("contenido").innerHTML = `
    <h1>Tus Amigos</h1>
    <p>Aquí están tus amigos más cercanos.</p>`;
}

function abrirMensajes() {
  document.getElementById("contenido").innerHTML = `
    <h1>Mensajes</h1>
    <p>Lee y responde tus mensajes aquí.</p>`;
}

function mostrarNotificaciones() {
  document.getElementById("contenido").innerHTML = `
    <h1>Notificaciones</h1>
    <p>Estas son tus notificaciones recientes.</p>`;
}

function realizarBusqueda() {
  const query = document.getElementById("buscar").value;
  if (query) {
    document.getElementById("contenido").innerHTML = `
      <h1>Resultados de búsqueda</h1>
      <p>Has buscado: <strong>${query}</strong></p>`;
  } else {
    alert("Por favor, escribe algo para buscar.");
  }
}

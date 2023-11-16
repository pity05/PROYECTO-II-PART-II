const form = document.getElementById("objetoForm");
const tipoInput = document.getElementById("tipo");
const idLabel = document.querySelector('label[for="id"]');
const idInput = document.getElementById("id");
const tituloLabel = document.querySelector('label[for="titulo"]');
const tituloInput = document.getElementById("titulo");
const agregarButton = document.getElementById("agregar");
const actualizarButton = document.getElementById("actualizar");
const eliminarButton = document.getElementById("eliminar");


tipoInput.addEventListener("change", function () {
  const selectedValue = tipoInput.value;

  if (selectedValue === "imagen" || selectedValue === "logo") {
    idLabel.textContent = "ID:";
    tituloLabel.textContent = "URL:";
    idInput.placeholder = "Ingrese la ID";
    tituloInput.placeholder = "Ingrese la URL";
    idInput.type = "text";
  } else {
    idLabel.textContent = "ID:";
    tituloLabel.textContent = "Título:";
    idInput.placeholder = "Ingrese la ID";
    tituloInput.placeholder = "Ingrese el Título";
    idInput.type = "text";
  }
});

agregarButton.addEventListener("click", async function () {
  var objeto = {
    tipo: tipoInput.value,
    id: parseInt(idInput.value, 10),
    titulo: tituloInput.value,
  };

  console.log(objeto);
  let url = 'http://localhost:3000/Api/create';

  try {
    const response = await apiCall(url, objeto, 'POST');
    alert("Objeto agregado correctamente");
    console.log(response);
  } catch (error) {
    if (error.message === 'ID already exists') {
      alert("Error: El ID ya existe. Por favor, elija un ID único.");
    } else {
      alert("Error al agregar objeto");
    }
    console.error(error);
  }
});

actualizarButton.addEventListener("click", async function () {
  var objeto = {
    tipo: tipoInput.value,
    id: parseInt(idInput.value, 10),
    titulo: tituloInput.value,
  };

  console.log(objeto);

  let url = `http://localhost:3000/Api/update/${objeto.id}`;

  try {
    const response = await apiCall(url, objeto, 'PATCH');
    alert("Objeto actualizado correctamente");
    console.log(response);
  } catch (error) {
    alert("Error al actualizar objeto");
    console.error(error);
  }
});

eliminarButton.addEventListener("click", async function () {
  var objeto = {
    id: parseInt(idInput.value, 10),
  };

  try {
    const url = `http://localhost:3000/Api/remove/${objeto.id}`;
    const response = await apiCall(url, {}, 'DELETE');
    alert("Objeto eliminado correctamente");
    console.log(response);
  } catch (error) {
    alert("Error al eliminar objeto");
    console.error(error);
  }
});

async function apiCall(url, data, method) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const text = await response.text();

    if (!text.trim()) {
      console.warn("Respuesta vacía del servidor");
      return null; 
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}


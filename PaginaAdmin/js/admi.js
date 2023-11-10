const form = document.getElementById("objetoForm");
        const tipoInput = document.getElementById("tipo");
        const idInput = document.getElementById("id");
        const tituloInput = document.getElementById("titulo");
        const agregarButton = document.getElementById("agregar");
        const eliminarButton = document.getElementById("eliminar");

        agregarButton.addEventListener("click", async function() {
            // Enviar solicitud a la API para agregar el objeto y luego redirigir a la página de visualización
            // Aquí debes agregar la lógica para realizar la solicitud POST a la API
            // Y luego redirigir a la página de visualización (página2.html)

            var Objeto = {
                id : idInput.value,
                titulo: tituloInput.value
   
            }

            console.log(Objeto)
            let url = 'http://localhost:3000/Api/create';

            await apiCall(url,Objeto );
            


        });

        eliminarButton.addEventListener("click", async  function() {
            // Enviar solicitud a la API para eliminar el objeto y luego redirigir a la página de visualización
            // Aquí debes agregar la lógica para realizar la solicitud DELETE a la API
            // Y luego redirigir a la página de visualización (página2.html)

            var response = await fetch("http://localhost:3000/Api", {mode: 'no-cors',});
            console.log(response);
        });



        async function apiCall(url, data) {
            try {
              let response = await fetch(url, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                mode: 'no-cors',
                body: JSON.stringify(data)
              });
              console.log(response);
            } catch (error) {
              console.error("Error en la solicitud:", error);
            }
          }


        // 
document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensajeFormulario');
    
    mensaje.textContent = `¡Excelente, ${nombre}! Formulario procesado con éxito.`;
    mensaje.className = "exito"; 
    
    this.reset(); 
});

document.getElementById('btnCargarAPI').addEventListener('click', function() {
    const contenedor = document.getElementById('resultadoAPI');
    contenedor.innerHTML = "<p>Cargando datos...</p>";

    const idAleatorio = Math.floor(Math.random() * 10) + 1;

    fetch(`https://jsonplaceholder.typicode.com/users/${idAleatorio}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            contenedor.innerHTML = `
                <p><strong>ID Usuario:</strong> # ${data.id}</p>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Empresa:</strong> ${data.company.name}</p>
            `;
        })
        .catch(error => {
            contenedor.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
});
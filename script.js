// Usamos async para hacer la petición a la API
const cargarpeliculas = async () => {
    // Manejamos la petición a la API
    try {
        // await para esperar la respuesta
        const respuesta = await fetch(
            "https://api.themoviedb.org/3/movie/11?api_key=d61467b778cbd181cd3d03956a11b17c&language=es-AR"
        );
        // mostramos el mensaje de respuesta por consola
        console.log("respuesta :>> ", respuesta);
        // Verificamos el estado de la respuesta
        if (respuesta.status === 200) {
            // obtenemos los datos de la respuesta y los guardamos en un objecto
            const datos = await respuesta.json();
            // Mostramos los datos obtenidos en consola
            console.log("datos :>> ", datos);
            // Preparamos la película con los datos obtenidos
            let pelicula = ""; // Creamos un string vacío
            pelicula += `
            <h1>${datos.title}</h1>
            <h2>${datos.original_title}</h2>
            <p>${datos.overview}</p>
            `;
            document.getElementById("contenedor").innerHTML = pelicula;

            return datos.title;
        } else if (respuesta.status === 404) {
            console.log("No se encontraron resultados");
        } else {
            console.log("Ocurrió un error...");
        }
    } catch (error) {
        // Mostramos el mensaje de error
        console.log(error);
    }
};
// ejecutamos la función al cargar la pagina
cargarpeliculas();

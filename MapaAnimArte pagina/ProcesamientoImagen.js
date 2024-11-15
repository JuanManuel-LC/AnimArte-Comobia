// Función para cargar y mostrar la imagen seleccionada
function loadImage(event) {
    const image = document.getElementById("selectedImage");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function () {
        URL.revokeObjectURL(image.src); // Libera memoria
    };
}

const form = document.getElementById('formulario');
const input = document.getElementById('inputComentario');
const comentarios = document.getElementById('seccionComentarios');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const texto = input.value;
    const nuevoComentario = document.createElement('p');
    nuevoComentario.textContent = texto;

  // Botón para eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
    nuevoComentario.remove();
    });

    nuevoComentario.appendChild(btnEliminar);
    comentarios.appendChild(nuevoComentario);

    input.value = '';
});
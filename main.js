document.addEventListener('DOMContentLoaded', () => {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const respuesta = document.getElementById('respuesta');
    const pregunta = document.getElementById('pregunta');

    let intentos = 0;
    // Lista de respuestas para el botón 'No'
    const respuestasNo = ["¿Cómo que no?", "Que pedo", "Alv tus papas pues"];

    btnSi.addEventListener('click', () => {
        // Oculta la pregunta y muestra la respuesta
        pregunta.classList.add('hidden');
        respuesta.classList.remove('hidden');
    });

    btnNo.addEventListener('click', () => {
        if (intentos < respuestasNo.length) {
            // Cambia el texto del botón 'No' con cada clic
            btnNo.textContent = respuestasNo[intentos++];
        } else {
            // Después de mostrar todos los mensajes, el botón 'No' desaparece
            btnNo.style.opacity = '0';
            // Espera un momento antes de ocultar completamente el botón para permitir que el usuario vea el cambio
            setTimeout(() => {
                btnNo.style.display = 'none';
            }, 500); // Ajusta este tiempo según necesites
        }
    });
});

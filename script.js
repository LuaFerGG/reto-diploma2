document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const sentimiento = document.getElementById('sentimiento').value;
    const fecha = new Date().toLocaleDateString();

    // Guardar los datos en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('fecha', fecha);
    localStorage.setItem('sentimiento', sentimiento)

    // Redirigir a la página del diploma
    window.location.href = 'diploma.html';
});
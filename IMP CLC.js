function calcularPension() {
    // Obtiene el valor del campo de entrada con id 'primerNombre'.
    const primerNombre = document.getElementById('primerNombre').value;

    // Obtiene el valor del campo de entrada con id 'segundoNombre'.
    const segundoNombre = document.getElementById('segundoNombre').value;

    // Obtiene el valor del campo de entrada con id 'primerApellido'.
    const primerApellido = document.getElementById('primerApellido').value;

    // Obtiene el valor del campo de entrada con id 'segundoApellido'.
    const segundoApellido = document.getElementById('segundoApellido').value;

    // Obtiene y convierte el valor del campo de entrada con id 'edad'.
    const edad = parseInt(document.getElementById('edad').value);

    // Obtiene el valor del campo de entrada con id 'correo'.
    const correo = document.getElementById('correo').value || "No proporcionado";

    // Obtiene el valor del campo de entrada con id 'telefono'.
    const telefono = document.getElementById('telefono').value;

    // Obtiene el valor seleccionado del campo de entrada con id 'genero'.
    const genero = document.getElementById('genero').value;

    // Obtiene el valor seleccionado del campo de entrada con id 'pertenencia'.
    const pertenencia = document.getElementById('pertenencia').value;

    // Obtiene y convierte el valor del campo de entrada con id 'añosCotizados'.
    const añosCotizados = parseInt(document.getElementById('añosCotizados').value);

    // Crea un array de salarios.
    const salarios = [
        parseFloat(document.getElementById('salario1').value),
        parseFloat(document.getElementById('salario2').value),
        parseFloat(document.getElementById('salario3').value),
        parseFloat(document.getElementById('salario4').value),
        parseFloat(document.getElementById('salario5').value),
    ];

    // Verifica si la edad es menor a la edad mínima requerida para jubilarse según el género.
    if (edad < (genero === "hombre" ? 60 : 55)) {
        alert("La edad mínima de jubilación es 60 años para hombres y 55 años para mujeres.");
        return; // Sale de la función si no se cumple el requisito de edad.
    }

    // Verifica si los años cotizados son menores de 20.
    if (añosCotizados < 20) {
        alert("Debe tener un mínimo de 20 años cotizados.");
        return; // Sale de la función si no se cumple el requisito de años cotizados.
    }

    // Suma manualmente los 5 salarios.
    let totalSalarios = salarios[0] + salarios[1] + salarios[2] + salarios[3] + salarios[4];

    // Calcula el salario promedio.
    const salarioPromedio = totalSalarios / 5;

    // Inicializa el porcentaje de pensión en 50%.
    let porcentajePension = 0.50;

    // Si los años cotizados son mayores a 20, añade un 2% adicional por cada año extra.
    if (añosCotizados > 20) {
        const añosAdicionales = añosCotizados - 20;
        porcentajePension += (añosAdicionales * 0.02); // 2% adicional por cada año extra.
    }

    // Calcula el monto de la pensión.
    const montoPension = salarioPromedio * porcentajePension;

    // Almacena los valores en localStorage.
    localStorage.setItem('primerNombre', primerNombre);
    localStorage.setItem('segundoNombre', segundoNombre);
    localStorage.setItem('primerApellido', primerApellido);
    localStorage.setItem('segundoApellido', segundoApellido);
    localStorage.setItem('edad', edad);
    localStorage.setItem('correo', correo);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('genero', genero);
    localStorage.setItem('pertenencia', pertenencia);
    localStorage.setItem('añosCotizados', añosCotizados);
    localStorage.setItem('salarioPromedio', salarioPromedio.toFixed(2));
    localStorage.setItem('montoPension', montoPension.toFixed(2));

    // Redirige al usuario a la página de resultados.
    window.location.href = "RESULTADO IMP.html";
}
     // String original
    let info = "nombre:Lorenzo Pérez Carbonell; edad:20; Profesión:Estudiante";

    // 1. Eliminar espacios sobrantes
    let textoLimpio = info.trim();

    // 2. Dividir usando ';' como separador
    let partes = textoLimpio.split(";");

    // 3. Extraer el nombre completo
    // La primera parte es "nombre:Luis Rodríguez"
    let campoNombre = partes[0].trim(); 
    let nombre = campoNombre.split(":")[1].trim();

    // 4. Mostrar resultados
    let resultado = `
        <p><strong>Nombre obtenido:</strong> ${nombre}</p>
        <p><strong>Total de campos encontrados:</strong> ${partes.length}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;

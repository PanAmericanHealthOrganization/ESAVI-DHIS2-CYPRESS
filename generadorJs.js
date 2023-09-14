const fs = require('fs');

const sexos = ['Masculino', 'Femenino', 'Otro'];
// Función para generar una cadena aleatoria
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Función para generar una fecha aleatoria en el rango de años especificado
function generateRandomDate(startYear, endYear) {
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Función para generar un registro CSV
function generateCSVRecord() {
    const fechaInscripcion = generateRandomDate(2021, 2023);
    const identificadorUnico = generateRandomString(6);
    const nombres = generateRandomString(5);
    const apellidos = generateRandomString(8);
    const fechNacimiento = generateRandomDate(1950, 2005);
    // obtener ramdon desde la lista de sexos
    const sexo = sexos[Math.floor(Math.random() * sexos.length)];;
    const municipio = generateRandomString(7);
    const direccion = generateRandomString(10);
    const correoElectronico = `${nombres.toLowerCase()}${apellidos.toLowerCase()}@example.com`;
    const numeroTelefono = `555-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

    return `${fechaInscripcion},${identificadorUnico},${nombres},${apellidos},${fechNacimiento},${sexo},${municipio},${direccion},${correoElectronico},${numeroTelefono}\n`;
}

// Generar 10 registros CSV
let csvData = 'fechaInscripcion,identificadorUnico,nombres,apellidos,fechNacimiento,sexo,municipio,direccion,correoElectronico,numeroTelefono\n';
for (let i = 0; i < 1000; i++) {
    csvData += generateCSVRecord();
}

// Guardar los registros en un archivo CSV
fs.writeFileSync('registros.csv', csvData, 'utf8');
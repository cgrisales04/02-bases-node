const fs = require("fs");
const colors = require("colors");

const crearArchivoTabla = async (base, listar, hasta) => {
  try {
    let salida,
      consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${"*".green} ${i} ${"=".green} ${colors.blue(
        i * base
      )}\n`;
      consola += `${base} * ${i} = ${i * base}\n`;
    }
    if (listar) {
      console.log("=========================".green);
      console.log(`   Tabla del: ${colors.blue(base)}`.green);
      console.log("=========================".green);
      console.log(salida);
    }
    fs.writeFileSync(`salida/tabla-${base}.txt`, consola);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivoTabla,
};

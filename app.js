const { crearArchivoTabla } = require("./helpers/multiplicar.js");
const { argv } = require("./config/yargs.js");

require("colors");

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then((result) => {
    console.log(result.rainbow, "creado");
  })
  .catch((err) => {
    console.log(err);
  });

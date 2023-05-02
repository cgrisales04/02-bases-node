const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
    },
    l: {
      alias: "listar",
      type: "boolean",
      demandOption: false,
      default: false,
    },
    h: {
      alias: "hasta",
      type: "number",
      demandOption: false,
      default: 10,
    },
  })
  .check((argvCheck, options) => {
    if (isNaN(argvCheck.b)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argvCheck.h)) {
      throw "El parametro hasta y/o h debe ser número";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};

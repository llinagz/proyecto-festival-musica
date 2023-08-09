const {src, dest, watch} = require("gulp") //Este gulp es el que instalamos y vemos en el package.json y el require es una forma de extraerlo
//src sirve para identificar un archivo y dest para guardarlo
const sass = require("gulp-sass")(require("sass"))

function css(done) {
  src("src/scss/**/*.scss") //Identificar el archivo de SASS
    .pipe(sass()) //Compilarlo, ejecutar las funciones de SASS
    .pipe(dest("build/css")) //Guardarlo en el disco duro

  done() //Callback que avisa a gulp cuando llegamos al final
}

function dev(done) {
  watch("src/scss/**/*.scss", css)
  done()
}

exports.css = css
exports.dev = dev

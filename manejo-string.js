
let nombre = "Julio"
let apellido = "Uva"

let estudiante = (nombre.concat(" ", apellido))
console.log (estudiante)

let estudianteMayus = (estudiante.toUpperCase())
console.log (estudianteMayus)

let estudianteMinus = (estudiante.toLowerCase())
console.log (estudianteMinus)

let estudiante_str = (estudiante.length)
console.log (estudiante_str)

let estudiante_frt_chr = (nombre.charAt(0).toUpperCase())
console.log (estudiante_frt_chr)

let estudiante_end_chr = (apellido.charAt(apellido.length-1))
console.log (estudiante_end_chr)

let nombre_spc = "Julio      "
let apellido_spc = " Uva .   "

let estudiante_no_space = (nombre_spc.concat(apellido_spc.trim()))
console.log (estudiante_no_space)

let nombre_bol = "JULIO"
let apellido_bol = "CESAR"
let estudiante_bol = new Boolean (nombre_bol.concat(" ", apellido_bol))
console.log(estudiante_bol.toString()); // "true"

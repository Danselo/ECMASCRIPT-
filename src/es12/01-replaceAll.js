const text = "Me gustan las manzanas con salsa de tomate";
const values = text.replaceAll("manzanas", "papas");
console.log(values); // me gustan las papas con salsa de tomate


// .replace(): solo hace el reemplazo en la primera coincidencia con el texto indicado.
// .replaceAll(): como su nombre lo indica, hace el reemplazo a todos las coincidenas dentro del string.
const estudiante = {
    nombre: "Laura",
    notas:[4.0, 3.8]
};

const actualizarNotas = (estudiante, ...nuevasNotas) => {
    const {nombre, notas} = estudiante
    // console.log(estudiante);
    // console.log(nuevasNotas);
    // console.log(notas);
    const nuevo = [...notas, ...nuevasNotas]
    // console.log(nuevo);
    return {
        nombre, "notas": nuevo
    }
}
let nuevo = actualizarNotas (estudiante, 5.0, 4.3, 3.8, 4.9);
console.log(estudiante);
console.log(nuevo);


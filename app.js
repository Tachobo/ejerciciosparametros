let obj = {Ciudad: "Bogota", Pais: "Colombia"}
const  mostrarDireccion = (obj) =>{
    try {
        const {Ciudad, Pais} =obj;
        if (Ciudad == undefined || Pais == undefined){
            throw new Error("La información no es valida");
        }
        console.log(Ciudad);
        console.log(Pais);
    } catch (error) {
        console.log(error.mesagge);
    }
}
mostrarDireccion(obj);
console.log("Finalizar");


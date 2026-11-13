export const crearInventario = (matriz) => {

   if (!Array.isArray(matriz)){
    return [];
   }
   return matriz.map((fila) => ({
    titulo: fila[0],
    plataforma: fila[1],
    precio: fila[2],
    stock: fila[3],
   }));
}

export const ampliarInventario = (inventario, matrizNovedades) => {
    return inventario.concat
    (crearInventario(matrizNovedades));
};

export const titulosOrdenados = (inventario) => {
    return inventario.map((j) => j.titulo).sort((a, b) => a.localeCompare(b));
};


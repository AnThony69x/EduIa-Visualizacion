import * as d3 from 'd3';

export const cargarDatos = async () => {
    const datos = await d3.csv(
        "/src/data/datos_limpios.csv",
        d3.autoType
    );

    return datos;
};
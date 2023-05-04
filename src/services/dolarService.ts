import { Dolar } from "@/types/dolar.type"


export async function obtenerPreciosDolar() {

    const res = await fetch("https://dolarsi.com/api/api.php?type=valoresprincipales")
    const data = await res.json()
    const preciosFiltrados = filtrarPrecios(data)
    

    return preciosFiltrados

}

function filtrarPrecios(precios: []) {

    let preciosFiltrados : Array<Dolar>= []
    for (const {casa} of precios) {
        const { nombre, venta, compra }: { nombre: string, venta: string, compra: string } = casa
        if (nombre.includes("Liqui") || nombre.includes("Blue") || nombre.includes("Oficial")) {
            preciosFiltrados = [
                ...preciosFiltrados,
                {
                    nombre,
                    venta:Number(venta.replace(",",".")),
                    compra: Number(compra.replace(",","."))
                }
            ]
        }
    }
    
    return preciosFiltrados

}
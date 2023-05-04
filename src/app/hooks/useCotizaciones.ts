import { obtenerPreciosDolar } from "@/services/dolarService"
import { Dolar } from "@/types/dolar.type"
import { useEffect, useState } from "react"


export default function useCotizaciones() {
    const [cotizaciones, setCotizaciones] = useState<Dolar[]>([])

    useEffect(() => {
        const updateCotizaciones = async () => {
            const data = await obtenerPreciosDolar()
            setCotizaciones(data)
        }

        updateCotizaciones()
    }, [])

    return {cotizaciones}
}

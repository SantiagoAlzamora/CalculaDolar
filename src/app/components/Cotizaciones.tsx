import { obtenerPreciosDolar } from '@/services/dolarService'

// No lo uso por incompatibilidades entre server y client

export default async function Cotizaciones({ amount }: { amount: number }) {
  const cotizaciones = await obtenerPreciosDolar()

  return (
    <ul>
      {
        cotizaciones.map((cotizacion) => {

          const total = amount ? Number(amount / cotizacion.venta) : cotizacion.venta
          return (
            <li key={cotizacion.nombre}>
              <div className='dolar-name'>{cotizacion.nombre}</div>
              <div className='precio'>
                {amount !== 0 &&
                  <div>{Number(total).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS"
                  })}</div>
                }
                {Number(cotizacion.venta).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS"
                })}
              </div>
            </li>
          )
        }
        )
      }
    </ul>
  )
}

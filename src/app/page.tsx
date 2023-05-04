"use client"
import Form from './components/Form'
import styles from './page.module.css'
import "./calculadora.css"
import { useState } from 'react'
import useCotizaciones from './hooks/useCotizaciones'


export default function Home() {
  const [amount, setAmount] = useState(0)
  const { cotizaciones } = useCotizaciones()

  function handleChange(value: string) {

    const newAmount = Number(value)

    if(isNaN(newAmount)) return
    
    setAmount(Number(value))
  }

  return (
    <main className={styles.main}>
      <h1>CalculaDolar</h1>
      <div className="calculadora">
        <section><Form value={amount} changeAmount={handleChange} /></section>
        <section className="precios">
          <ul className='cotizaciones'>
            {
              cotizaciones.map((cotizacion) => {

                const total = amount ? Number(amount / cotizacion.venta) : cotizacion.venta
                return (
                  <li className='cotizacion' key={cotizacion.nombre}>
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
        </section>
      </div>
    </main>
  )
}


import { useEffect, useState } from "react"
import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/Carrito.module.css'

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
    const [total, setTotal] = useState(0);

    useEffect( () =>{
        const calculoTotal = carrito.reduce( (total, prod) => total + (prod.cantidad * prod.precio), 0);
        setTotal(calculoTotal);
    }, [carrito])

    return (
        <Layout pagina='Carrito de Compras'>
            <main className="contenedor">
                <h1 className="heading">Carrito</h1>

                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Articulos</h2>
                        {carrito.length === 0 ? 'Carrito Vacío' : (
                            carrito.map(prod => (
                                <div key={prod.id} className={styles.producto}>
                                    <div>
                                        <Image width={250} height={480} src={prod.imagen} alt={prod.nombre}/>
                                    </div>
                                    <div>
                                        <p className={styles.nombre}>{prod.nombre}</p>

                                        <div className={styles.cantidad}>
                                            <p>Cantidad:</p>
                                            <select
                                                onChange={e => actualizarCantidad({
                                                    id: prod.id,
                                                    cantidad: e.target.value
                                                })}
                                                className={styles.select}
                                                value={prod.cantidad}
                                            >
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                                <option value='8'>8</option>
                                                <option value='9'>9</option>
                                            </select>
                                        </div>

                                        <p className={styles.precio}>$<span>{prod.precio}</span></p>
                                        <p className={styles.subtotal}>Subtotal: $<span>{prod.cantidad * prod.precio}</span></p>
                                    </div>
                                    <button
                                        className={styles.eliminar}
                                        type='button'
                                        onClick={() => eliminarProducto(prod.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}

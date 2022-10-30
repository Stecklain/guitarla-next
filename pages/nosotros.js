import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros'/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor finibus mi vel pharetra. Duis ac dignissim magna, ac volutpat purus. Mauris luctus aliquam nibh, id ullamcorper nibh malesuada et. Pellentesque molestie magna nisl, nec sagittis lacus condimentum at. Nullam sit amet purus arcu.</p>
            <p>Phasellus ultricies, est ullamcorper eleifend iaculis, metus nibh commodo arcu, nec ornare tortor leo quis libero. Quisque dapibus diam non elit ornare, id ullamcorper quam fringilla. Sed dictum vestibulum ex, Nam vitae arcu quis dui tristique ullamcorper et eget nunc. Donec tristique accumsan enim, non accumsan orci sagittis in.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros

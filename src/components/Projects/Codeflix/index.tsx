import Link from 'next/link'
import styles from './styles.module.scss'

export const Codeflix = () => {
  return (
    <section className={styles.container}>
      <img className={styles.imgBackground} src="/img/codeflix.png" alt="codeflixImg" />
      <div className={styles.textContent}>
        <h2 className='text-red-700 font-bold'>CODEFLIX</h2>
        <p>Com o crescimento de cursos online só aumentando ao decorrer dos anos o meu projeto de uma plataforma EAD de cursos tem como finalidade de oferecer uma boa experiência de usuário.</p>
        <p>Neste projeto, meu propósito era aplicar na prática os conhecimentos adquiridos ao longo do último ano, a lógica de programação, as linguagens, bibliotecas e frameworks mas também aprender mais durante o desenvolvimento do projeto.</p>
        <p>O projeto conta com recursos de administração usando o AdminJs para facilitar a gestão do sistema, ele permite listar todos os usuários cadastrados no curso, editar suas informações ou excluí-los se necessário, e conceder privilégios de administrador. Além disso, é possível listar todas as categorias do curso, criar novas ou apagá-las. A página de administração também lista todos os cursos, e cada um deles conta com recursos de CRUD. É possível definir a capa para cada curso com um simples arrastar de imagem ou escolhendo a imagem desejada nos seus arquivos. Também é possível adicionar episódios para cada curso...</p>
        <Link href={"/codeflix"} >
          <button className='bg-light text-white bg-gradient-to-r from-orange to-pink border-none py-2 ease-out duration-300 rounded-md hover:scale-110' style={{ border: 'none', width: '10rem'}}>Ver mais</button>
        </Link>
      </div>
    </section>
  )
}

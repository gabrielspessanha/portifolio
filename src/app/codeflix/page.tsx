
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Codeflix(){
  return (
    <div className={styles.container}>
      <div className={styles.imgContent}>
        <img className={styles.backgroundImg} src="/img/backgroundCodeflix.png" alt="backgroundCodeflix" />
      </div>
      <div className={styles.textContent}>
          <img src="/img/logo.png" alt="logoCodeflix" />
          <p>Com o crescimento de cursos online só aumentando ao decorrer dos anos o meu projeto de uma plataforma EAD de cursos tem como finalidade de oferecer uma boa experiência de usuário.</p>
          <p>Neste projeto, meu propósito era aplicar na prática os conhecimentos adquiridos ao longo do último ano, a lógica de programação, as linguagens, bibliotecas e frameworks mas também aprender mais durante o desenvolvimento do projeto.</p>
          <p>O projeto conta com recursos de administração usando o AdminJs para facilitar a gestão do sistema, ele permite listar todos os usuários cadastrados no curso, editar suas informações ou excluí-los se necessário, e conceder privilégios de administrador. Além disso, é possível listar todas as categorias do curso, criar novas ou apagá-las. A página de administração também lista todos os cursos, e cada um deles conta com recursos de CRUD. É possível definir a capa para cada curso com um simples arrastar de imagem ou escolhendo a imagem desejada nos seus arquivos. Também é possível adicionar episódios para cada curso.</p>
          <p>Para os usuários, a plataforma oferece uma página principal para usuários não cadastrados, página de login e registro para usuários novos. Ao criar a sua conta, você tem acesso a todos os cursos, e cada um deles possui uma página individual, podendo ser favoritados ou receber um coração para seus cursos favoritos.</p>
          <p>A página principal é dividida por diferentes slides, sendo um deles dedicado aos seus cursos favoritos. Possui um painel do usuário onde é possível ver suas informações e alterar dados, como o e-mail, por exemplo. </p>
          <p>odas as páginas são autenticadas, então usuários não cadastrados não têm acesso à página inicial ou qualquer outra, sendo redirecionados para a tela de login se tentarem acessar as páginas autenticadas. E para aqueles que desejam explorar ainda mais, todos os recursos do projeto estão disponíveis no meu GitHub.</p>
          <div>
            <h3 className='text-red-600 font-bold'>Tecnologias utilizadas:</h3>
            <p>No back-end, utilizei JavaScript e TypeScript com Node.js e Express para a lógica do servidor. Gerenciei o banco de dados com Sequelize e Sequelize CLI, Reforcei a segurança com bcrypt, JSON Web Token, e gerenciei permissões usando CORS. Hospedei o projeto na Vercel, integrando pg para interação com o PostgreSQL.</p>

            <p>No front-end, utilizei JavaScript e TypeScript, integrando Next.js para construção eficiente. Estilizei a interface com Bootstrap e SASS, criando um design moderno e responsivo. Para interação assíncrona com o back-end, implementei SWR e Axios. Adicionei dinamismo visual com a biblioteca AOS (Animate On Scroll), e aprimorei a navegação com o Splide.js.</p>
          </div>

          <p>Em última análise, este projeto não é apenas uma conquista técnica; é uma representação visual de minha jornada de aprendizado ao longo do último ano. Cada linha de código reflete a dedicação que estou investindo para realizar meu sonho de conseguir minha primeira vaga como desenvolvedor.</p>

          <div className='flex gap-3'>
              <Link href="https://github.com/gabrielspessanha/codeflix-frontEnd">
                <button className='cursor-pointer text-white bg-gradient-to-r from-violet-900 to-cyan-950 border-none py-2 ease-out duration-300 rounded-md hover:scale-110' style={{ border: 'none', width: '10rem'}}>Github</button>
              </Link>

              <Link href="/" >
                <button className='text-white bg-gradient-to-r from-amber-400 to-amber-500 border-none py-2 ease-out duration-300 rounded-md hover:scale-110' style={{ border: 'none', width: '10rem'}}>Ver Projeto</button>
              </Link>
          </div>
          
        </div>
    </div>
  )
}

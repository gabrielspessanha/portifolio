import styles from './styles.module.scss';

const Contact = () => {
  return (
    <section className={styles.container}>
      <h2>Contato</h2>
      <hr />

      <form action="https://api.staticforms.xyz/submit" method='post' className={`${styles.form}`}>
        
        <label htmlFor="Name">Nome</label>
        <input type="text" name='name' placeholder='Digite seu nome' autoComplete='off' required/>

        <label htmlFor="email">Email</label>
        <input type="text" name='email' placeholder='Digite seu email' autoComplete='off' required/>

        <label htmlFor="message">Mensagem</label>
        <textarea name='message' cols={30} rows={10} placeholder='Digite sua menssage' required/>

        <button type='submit'>Enviar</button>

        <input type="hidden" name="accessKey" value="0f9dc640-98dc-4884-b3b4-1fcc37a0abed" />
        <input type="hidden" name="redirectTo" value="https://gabrielpessanha.netlify.app/"></input>
      </form>

    </section>
  )
}

export default Contact
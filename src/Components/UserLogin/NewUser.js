import React from 'react'
import styles from './NewUser.module.css'
import { newUser } from '../../Services/User/NewUser'

const NewUser = () => {

  const[email, setEmail] = React.useState(null);
  const[username, setUserName] = React.useState(null);
  const[password, setPassword] = React.useState(null);


  function handleSubmit() {

    newUser(username, email, password)
    .then((response) => console.log(response))
    .catch((error) => console.error("ops! ocorreu um erro" + error));

  }

  console.log(email)
  console.log(username)
  console.log(password)


  return (
    <div className={styles.background}>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Cadastrar</h1>
        <input onChange={(e) => setEmail(e.target.value)}  type="e-mail" placeholder="E-mail"/>
        <input onChange={(e) => setUserName(e.target.value)}  type="text" placeholder="Usuario"/>
        <input onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Senha"/>
        <a href="/">Esqueci minha senha</a>
        <button onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  </div>
  )
}

export default NewUser
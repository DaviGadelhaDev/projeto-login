import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './home.css'



function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  //quando se trata de uma submissao ele recebe um evento
  async function handleLogin(e) {
    e.preventDefault()
    if (email != '' && password != '') {

      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/admin', { replace: true })
        })

        .catch(() => {
          console.log("Error ao fazer o login")
        })
    }

    else {
      alert("Preencha todos os campos")
    }

  }


  //o form precisa ter o onSubmit para quando o usuario clicar em acessar ele tomar alguma ação
  return (
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      <span>Gerencie sua agenda de forma fácil</span>

      <form className='form' onSubmit={handleLogin}>
        <input type="text" placeholder='digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} /> {/*O autoComplete não irá sugerir senha*/}


        <button type='submit'>Acessar</button>

      </form>

      <Link className='button-link' to='/register'>Não possui uma conta? Cadastre-se</Link>
    </div>
  );
}

export default Home;

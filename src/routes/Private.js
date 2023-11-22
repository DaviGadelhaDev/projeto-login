import {useEffect, useState} from 'react'
import { auth } from '../firebaseConnection'
import {onAuthStateChanged}  from 'firebase/auth' //verifica se tem usuario logado
import { Navigate } from 'react-router-dom'

function Private({children}) {
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => {


        async function checkLoading(){
            const onsub = onAuthStateChanged(auth, (user) => {
                //possui user logado
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }
                    localStorage.setItem("@detailUser", JSON.stringify(userData))

                    setLoading(false)
                    setSigned(true)
                }
                //Não possui user logado
                else{
                    setLoading(false)
                    setSigned(false)
                }
            })
        }

        checkLoading()

    }, [])

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed){
        return(
            <Navigate to='/'/>
        )
    }

    return children
}

export default Private
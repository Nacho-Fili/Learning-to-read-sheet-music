import { useContext } from 'react'
import UserContext from '../context/UserContext'
import loginService from '../services/loginService'

export default function UseUser(){
    const {jwt, setJWT} = useContext(UserContext)

    const login = ({username, password}) =>
        loginService({username, password})
            .then(jwt => setJWT(jwt))
            .catch(e => {
                console.error(e)
                throw new Error(e)
            })



    const isLogged = () => Boolean(jwt)

    return({
        isLogged,
        login
    })
}
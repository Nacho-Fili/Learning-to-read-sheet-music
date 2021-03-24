import axios from 'axios'
const ENDPOINT = "http://localhost:8080"



export default function login({username, password}){
    return axios.post(`${ENDPOINT}/login`, {username, password})
        .then(res => {
            if(res.status != 200) throw new Error('Response is not OK')
            return res
        })
        .then(res => {
            const { authorization } = res.headers
            if(!authorization) throw new Error('Credenciales incorrectas')
            return(authorization.slice("bearer ".length))
        })
}
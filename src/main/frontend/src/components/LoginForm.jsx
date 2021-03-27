import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import SubmitButton from './SubmitButton'
import Input from './Input'
import './Form.css'
import useForm from '../hooks/UseForm'
import useUser from '../hooks/UseUser'
import P from './P'

const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0vh 20vh',
        padding: '5vh 0'
    },
}

export default function Form () {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const { errors, handleSubmit } = useForm({})
    const { isLogged, login } = useUser(false)

    const history = useHistory()

    const submit = e =>{
        handleSubmit(e, login, {username, password}, history)
    }

    return (
        <form style={style.form} action="" onSubmit={ submit }>
            
            <Input 
                type="text" 
                name="username" 
                onChange={({target}) => setUsername(target.value)}  
                className="section__form--input"
                placeholder="usuario"
                />
            <P>{errors.username && errors.username} </P>
            
            <Input 
                type="password" 
                name="password" 
                onChange={ ({target}) => setPassword(target.value) } 
                placeholder="contraseña"
                className="section__form--input "
                />
            <P>{errors.password && errors.password} </P>

            <SubmitButton/>
            <P>{errors.credentials && errors.credentials} </P>
        </form>
    )
    
}




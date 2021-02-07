import React, {Component} from 'react'
import SubmitButton from './SubmitButton'
import Input from './Input'

import './Form.css'
import P from "./P";

const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0vh 20vh',
        padding: '5vh 0'
    },
}

function validate(fields) {
    const errors = {};

    if(!fields.username)
        errors.username = 'username field is not optional!'
    else
        if(fields.username.includes(' '))
            errors.username = "password can't contains white chars"

    if(!fields.password)
        errors.password = 'password field is not optional!'


    return errors
}

export default class Form extends Component {

    API_KEY = process.env.REACT_APP_JWT

    state = {
        errors: {}
    }

    handleSubmit= (e) => {
        e.preventDefault()
        const {errors, ...fields} = this.state
        const result = validate(fields)
        this.setState({errors: result})
        if(Object.keys(result).length === 0) {
            //enviar
            console.log("Enviado!!!")
            e.target.reset()
        }
    }

    handleChange= ({ target }) => {
        const {name, value} = target
        this.setState({[name]: value})
    }

    render() {
        const {errors} = this.state
        return (
            <form style={style.form} action="" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <Input name='username' type='text' className='section__form--input' placeholder='Nombre de usuario...' style={style.input}/>
                {errors.username && <P>{errors.username}</P>}
                <Input name='password' type='password' className='section__form--input' placeholder='Contraseña' style={style.input}/>
                {errors.password && <P>{errors.password}</P>}
                <SubmitButton/>
            </form>
        )
    }
}
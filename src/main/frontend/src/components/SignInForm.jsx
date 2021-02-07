import React, { Component } from 'react'
import Input from "./Input";
import P from "./P";
import SubmitButton from "./SubmitButton";
import axios from 'axios'
import API_KEY from '../config'

const axiosInstance = axios.create({
    headers: {
        Authorization: API_KEY
    }
})

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

    if(!fields.email)
        errors.email = 'email field is not optional'
    else
        if(fields.email.includes(' '))
            errors.email = "email can't contains white chars"

    return errors
}

const sendForm = (fields) => {
    console.log(API_KEY)
    axiosInstance.post('/api/users', {
        username: fields.username,
        password: fields.password,
        mail: fields.email,
        createdBy: 'test',
        role: {
            id: 2,
            name: 'simpleUser'
        }
    })
        .then (response => console.log(response))
        .catch(e => console.log(e))
}

export default class SignInFormForm extends Component {
    state = {
        errors: {}
    }

    handleSubmit= (e) => {
        e.preventDefault()
        const {errors, ...fields} = this.state
        const result = validate(fields)
        this.setState({errors: result})
        if(Object.keys(result).length === 0) {
            sendForm(fields)
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
                <Input name='username' type='text' className='section__form--input' placeholder='Nombre de usuario' style={style.input}/>
                {errors.username && <P>{errors.username}</P>}
                <Input name='password' type='password' className='section__form--input' placeholder='Contraseña' style={style.input}/>
                {errors.password && <P>{errors.password}</P>}
                <Input name='email' type='email' className='section__form--input' placeholder='E-Mail' style={style.input}/>
                {errors.email && <P>{errors.email}</P>}
                <SubmitButton/>
            </form>
        )
    }
}
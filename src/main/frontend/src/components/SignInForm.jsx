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

                {errors.email && <P>{errors.email}</P>}
                <SubmitButton/>
            </form>
        )
    }
}
import API_KEY from "../config"
import axios from 'axios'

const axiosInstance = axios.create({
    headers: {
        Authorization: API_KEY
    }
})

export default class SignInFormHandler{

    validate = fields => {
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

    sendForm = fields => {
        axiosInstance.post('/login', {
            username: fields.username,
            password: fields.password
        })
            .then (response => console.log(response))
            .catch(e => console.log(e))
    }

}
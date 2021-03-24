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

        if(!fields.email)
            errors.email = 'email field is not optional'
        else
        if(fields.email.includes(' '))
            errors.email = "email can't contains white chars"

        return errors
    }

    sendForm = fields => {
        axiosInstance.post('/api/users', {
            username: fields.username,
            password: fields.password,
            mail: fields.email,
            createdBy: 'test',
            role: [{
                id: 2,
                name: 'simpleUser'
            }]
        })
            .then (response => console.log(response))
            .catch(e => console.log(e))
    }

}
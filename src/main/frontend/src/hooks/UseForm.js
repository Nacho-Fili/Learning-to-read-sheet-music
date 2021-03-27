import { useState } from "react"

export default function useForm(init){

    const [ errors, setErrors ] = useState(init)

    const validate = (fields) => {
        const forbiddenChars = [" ", "=", "|"]
 
        setErrors({})
        const newErrors = {}

        const fieldsWithErrors = Object.keys(fields).filter(key => forbiddenChars.some(c => fields[key].includes(c)) )
    
        fieldsWithErrors.forEach( field => {
            newErrors[field] = 'contenía caracteres prohibidos!'
        })

        setErrors({...newErrors})
        return newErrors
    }

    const handleSubmit= async (e, service, fields, history) => {
        e.preventDefault()
        const localErrors = validate(fields)

        if(Object.keys(localErrors).length === 0) {
            await service(fields)
                .then(p => history.push('/'))
                .catch(err => {
                    setErrors({...errors, credentials: "El nombre de usuario o la contraseña son incorrectos"})
                    e.target.reset()
                })
        } else {
            e.target.reset()
        }
    }

    return({
        handleSubmit,
        errors
    })
}
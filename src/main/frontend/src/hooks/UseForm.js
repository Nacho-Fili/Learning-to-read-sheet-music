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

    const handleSubmit= (e, service, fields) => {
        e.preventDefault()
        const localErrors = validate(fields)

        if(Object.keys(localErrors).length === 0) {
            service(fields)
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
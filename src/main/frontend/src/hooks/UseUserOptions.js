import {useState} from "react";

export default function UseUserOptions(){
    const [ options, setOptions ] = useState(false)

    const onHover = () => {
        setOptions(true)
    }

    const onHoverOut = () => {
        setOptions(false)
    }

    return({
        options,
        onHover,
        onHoverOut
    })
}
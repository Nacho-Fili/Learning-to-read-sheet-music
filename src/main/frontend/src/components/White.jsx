import { useEffect, useState } from "react"


export default function White(){
    const style = (positionLeft) => ({
        borderRadius: '30px',
        width: '12px',
        height: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: '2px solid white',
        position: 'relative',
        left: positionLeft,
        display: positionLeft < -20 ? 'none' : null
    })

    const [ position, setPosition ] = useState(400)

    useEffect(() => {
        const interval = window.setInterval(() => {
            setPosition(position - 10)
        }, 1000)

        return () => clearInterval(interval)
    })

    return(
        <>
            <div style={style(position)}/>
        </>
    )
}
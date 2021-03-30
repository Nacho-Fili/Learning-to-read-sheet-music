import {useState} from "react/cjs/react.production.min";

export default function White(){
    const style = (positionLeft) => ({
        borderRadius: '30px',
        width: '12px',
        height: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: '2px solid white',
        position: 'relative',
        left: positionLeft

    })

    const [positionLeft, setPositionLeft] = useState()

    window.setInterval(() => setPositionLeft(positionLeft - 1), 100)

    return(
        <div style={style(positionLeft)}/>
    )
}
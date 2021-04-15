import colors from "../colors/colors";
import Whites from "./Whites";
import UseGame from "../hooks/UseGame";
import { useEffect, useState } from "react"

export default function BlackLine({ playable, note }){

    const style = {
        line: {
            height: '4px',
            width: '100%',
            backgroundColor: colors.light,
            display: 'flex',
            alignItems: 'center'
        },

        container: {
            backgroundColor: colors.midStrong,
            height: '6px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        }
    }

    const { notesToRender, setNotesToRender } = UseGame()

    const [ quantity, setQuantity ] = useState(0)

    useEffect(() => {
        const interval = window.setInterval(() => {
            if(notesToRender[note]){
                setQuantity(quantity + 1)
                setNotesToRender({...notesToRender, [note]: false})
            }
        }) 

        return () => window.clearInterval(interval)
    }) 

    return(
        <div style={ style.container }>
            <div style={ style.line }>
                <Whites amount={quantity} />
            </div>
        </div>
    )
}
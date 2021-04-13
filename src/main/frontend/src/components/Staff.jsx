import colors from "../colors/colors";
import ShortStaffLines from "./ShortStaffLines"
import LongStaffLines from "./LongStaffLines"
import UseGame from "../hooks/UseGame";
import { useEffect } from "react";
import gNotes from "../data/gNotes";



export default function Staff(){

    const style = {
        gameSection:{
            height:'40%',
            width:'40%',
            backgroundColor: colors.midStrong,
            borderLeft: `2px solid ${colors.midLight}`,
        },

        noGameSection:{
            height:'40%',
            width: '8%',
            backgroundColor: colors.midStrong,
            marginLeft: '26%',
        }
    }

    const { notesToRender, setNotesToRender } = UseGame()

    const randomElement = array => array[Math.floor(Math.random() * array.length)]

    useEffect(() => {
        const interval = window.setInterval(() => { 
            setNotesToRender({...notesToRender, [randomElement(gNotes)]: true}) 
            console.log(notesToRender)
        }, 2000)

        return () => clearInterval(interval)
    }) 

    return(
        <div style={{display:'flex'}}>
            <div style={style.noGameSection}>
                <ShortStaffLines/>
            </div>
            <div style={style.gameSection}>
                <LongStaffLines/>
            </div>
        </div>
    )
}
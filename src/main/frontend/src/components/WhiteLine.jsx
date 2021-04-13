import { useEffect, useState } from "react";
import colors from "../colors/colors";
import UseGame from "../hooks/UseGame";
import White from "./White"


export default function WhiteLine({ playable, note }){
    const style = {
        line: {
            height: '3px',
            width: '100%',
            backgroundColor: colors.midStrong,
            display: 'flex',
            alignItems: 'center'
        },
        
        container: {
            backgroundColor: colors.midStrong,
            height: '10px',
            display: 'flex',
            alignItems: 'center'
        }
    }

    const { notesToRender, setNotesToRender } = UseGame()

    const whites = []

    const RenderNote = ({state}) => {
        let ret = null

        if(state[note] && playable)
            whites.push(<White />)

        return null
    }

    useEffect(() => {
        setNotesToRender({...notesToRender, [note]: false})
    }, [ notesToRender[note] ])

    return(
        <div style={style.container}>
            <div style={style.line}>
                <RenderNote state={notesToRender} />
                {
                    whites.map(white => white)
                }
            </div>
        </div>
    )
}
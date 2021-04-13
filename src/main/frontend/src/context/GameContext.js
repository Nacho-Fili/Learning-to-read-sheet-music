import React, { useState } from 'react'
import gNotes from '../data/gNotes'

const Context = React.createContext({})

export function GameContextProvider({ children }){

    const initialNotes = {}
    gNotes.forEach(gNote => initialNotes[gNote] = false)

    const [notesToRender, setNotesToRender] = useState(initialNotes)
    const [score, setScore] = useState(1200)

    const state = {
        notesToRender, 
        setNotesToRender,
        score,
        setScore
    }

    return(
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export default Context
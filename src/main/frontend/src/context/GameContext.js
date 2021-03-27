import {createContext, useState} from "react";


const Context = createContext({})

export function GameContextProvider({children}){

    const [score, setScore] = useState(0)
    const [notes, setNotes] = useState([])

    const state = {
        score,
        setScore,
        notes,
        setNotes
    }

    return(
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export default Context
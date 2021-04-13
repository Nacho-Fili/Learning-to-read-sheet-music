import gNotes from "../data/gNotes";
import {useContext, useState} from "react";
import gameContext from "../context/GameContext"

export default function UseGame(){

    const { score, setScore } = useContext(gameContext)
    const { notesToRender, setNotesToRender } = useContext(gameContext)
    
    return({
        notesToRender,
        setNotesToRender,
        score,
        setScore
    })
}
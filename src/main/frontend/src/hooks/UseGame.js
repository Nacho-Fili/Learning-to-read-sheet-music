import GameContext from "../context/GameContext";
import {useContext} from "react";

export default function UseGame(){

    const {notes, setNotes, score, setScore} = useContext(GameContext)

    const addNotes = (note) => setNotes(notes().add(note))

    return({
        addNotes,
        score,
        setScore
    })
}
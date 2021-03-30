import GameContext from "../context/GameContext";
import {useContext} from "react";
import gNotes from "../data/gNotes";

export default function UseGame(){

    const {notes, setNotes, score, setScore} = useContext(GameContext)

    const addNotes = (note) => {
        notes.push(note)
        setNotes()
    }

    function randomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function play(i) {
        if(!(i%50)) {
            let note = gNotes[randomNumber()]
            addNotes(note)
            console.log('agregamos una nota' + note)
        }
    }

    const start = () => {
        const INTERVAL = 100
        let i = 0
        console.log('Juego comenzado')
        window.setInterval(() => {
            play(i)
            i++

        }, INTERVAL)
    }

    return({
        notes,
        addNotes,
        score,
        setScore,
        start
    })
}
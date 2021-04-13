import WhiteLine from "./WhiteLine";
import BlackLine from "./BlackLine";
import gNotes from "../data/gNotes";

export default function LongStaffLines(){

    let lines = []

    for(let i = 0; i < 12; i++)
        lines.push(i % 2 ? 
            <WhiteLine key={gNotes[12 - i]} note={gNotes[12 - i]} playable={true}/> : 
            <BlackLine key={gNotes[12 - i]} note={gNotes[12 - i]} playable={true}/>)

    return(
        <>
            {lines}
        </>
    )
}
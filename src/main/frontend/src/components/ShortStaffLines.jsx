import WhiteLine from "./WhiteLine";
import BlackLine from "./BlackLine";
import gNotes from "../data/gNotes";


export default function ShortStaffLines(){

    let lines = []

    for(let i = 0; i < 12; i++)
        lines.push(i % 2 ? <WhiteLine key={gNotes[12 - i]} playable={false}/> : <BlackLine key={gNotes[12 - i]} playable={false}/>)

        return(
        <>
            {lines}
        </>
    )
}
import colors from "../colors/colors";
import PianoKey from "./PianoKey"

export default function PianoSection(){

    const style={
        pianoContainer:{
            width: '100%',
            height: '200px',
            backgroundColor: colors.midStrong,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
    }

    const pianoKeys = []
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3']

    for (let i = 0; i < notes.length; i++)
        pianoKeys.push(<PianoKey note={notes[i]}/>)



    return(
        <div style={style.pianoContainer}>
            {pianoKeys}
        </div>
    )
}